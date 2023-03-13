import { Component } from 'react';
import Styles from './SearchBar.module.css';

export class SearchBar extends Component {
  state = {
    value: '',
  };

  componentDidMount(): void {
    const savedInput = localStorage.getItem('inputValue');
    if (savedInput) {
      this.setState({
        value: savedInput,
      });
    }
  }

  componentWillUnmount(): void {
    localStorage.setItem('inputValue', this.state.value);
  }

  inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: event.target.value,
    });
  };

  render(): JSX.Element {
    const iconStyles = Styles.Icon;
    const cls = ['fa-solid fa-magnifying-glass', iconStyles];

    return (
      <div className={Styles.SearchBar}>
        <i className={cls.join(' ')}></i>
        <input
          className={Styles.Input}
          type="text"
          placeholder="Search card here..."
          value={this.state.value}
          onChange={this.inputHandler}
        />
      </div>
    );
  }
}
