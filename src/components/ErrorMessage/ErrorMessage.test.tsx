import { render, screen } from '@testing-library/react';
import { ErrorMessage } from './ErrorMessage';

describe('<ErrorMessage />', () => {
  it('renders error message', () => {
    render(<ErrorMessage error={'error'} />);
    const message = screen.getByText(/error/i);
    expect(message).toBeInTheDocument();
  });
});
