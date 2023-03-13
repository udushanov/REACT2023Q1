import { Component } from 'react';
import { Card } from '../components/Card/Card';
import { SearchBar } from '../components/SearchBar/SearchBar';
import axios from 'axios';
import { ICard } from '../components/models/card';

export class MainPage extends Component {
  state = {
    cards: [],
    searchString: '',
  };

  getCards = async () => {
    const response = await axios.get<ICard[]>('https://fakestoreapi.com/products?limit=8');
    this.setState({
      cards: [...response.data],
    });
  };

  componentDidMount(): void {
    this.getCards();
  }

  getInputValue = (value: string) => {
    if (value.trim().length === 0) {
      this.setState((prev) => ({ ...prev }));
    }

    this.setState((prev) => ({ ...prev, searchString: value }));
  };

  render(): JSX.Element {
    let cards = this.state.cards;
    const searchString = this.state.searchString;

    if (searchString.trim().length > 0) {
      cards = cards.filter((card: ICard) =>
        card.title.toLocaleLowerCase().includes(this.state.searchString.toLocaleLowerCase())
      );
    }

    return (
      <>
        <SearchBar onInputValue={this.getInputValue} />
        <div
          style={{
            display: 'flex',
            rowGap: '40px',
            columnGap: '80px',
            flexWrap: 'wrap',
            paddingBottom: '100px',
          }}
        >
          {cards.map((card: ICard) => {
            return <Card card={card} key={card.id} />;
          })}
        </div>
      </>
    );
  }
}
