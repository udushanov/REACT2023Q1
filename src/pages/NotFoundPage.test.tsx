import { render, screen } from '@testing-library/react';
import { NotFoundPage } from './NotFoundPage';

describe('<NotFoundPage />', () => {
  it('should contain Not found page', () => {
    render(<NotFoundPage />);
    const message = screen.getByText(/Not found page/i);
    expect(message).toBeInTheDocument();
  });
});
