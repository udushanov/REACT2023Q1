import { Component } from 'react';
import { Card } from '../components/Card/Card';
import { SearchBar } from '../components/SearchBar/SearchBar';
import axios, { AxiosError } from 'axios';
import { ICard } from '../components/models/card';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';

export class MainPage extends Component {
  state = {
    cards: [],
    searchString: '',
    error: '',
  };

  getCards = async () => {
    try {
      this.setState({
        error: '',
      });
      const response = await axios.get<ICard[]>('https://fakestoreapi.com/products?limit=8');
      this.setState({
        cards: [...response.data],
      });
    } catch (e) {
      const error = e as AxiosError;
      this.setState({ error: error.message });
    }
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
    const error = this.state.error;

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
          {error && <ErrorMessage error={error} />}
          {cards.map((card: ICard) => {
            return <Card card={card} key={card.id} />;
          })}
        </div>
      </>
    );
  }
}
