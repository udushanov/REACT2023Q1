import { Component } from 'react';
import { Card } from '../components/Card/Card';
import { SearchBar } from '../components/SearchBar/SearchBar';
import axios from 'axios';
import { ICard } from '../components/models/card';

export class MainPage extends Component {
  state = {
    cards: [],
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

  render(): JSX.Element {
    return (
      <>
        <SearchBar />
        <div
          style={{
            display: 'flex',
            rowGap: '40px',
            columnGap: '80px',
            flexWrap: 'wrap',
            paddingBottom: '100px',
          }}
        >
          {this.state.cards.map((card: ICard) => {
            return <Card card={card} key={card.id} />;
          })}
        </div>
      </>
    );
  }
}
