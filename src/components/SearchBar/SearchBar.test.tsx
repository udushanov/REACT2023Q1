import { render, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import { vi } from 'vitest';

describe('<SearchBar />', () => {
  it('renders Search card here... placeholder', () => {
    render(<SearchBar onInputValue={vi.fn()} />);
    const message = screen.getByPlaceholderText(/Search card here.../i);
    expect(message).toBeInTheDocument();
  });

  // it('', () => {
  //   render(<SearchBar onInputValue={vi.fn()} />);

  // })
});
