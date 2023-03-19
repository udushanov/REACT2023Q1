import { render, screen } from '@testing-library/react';
import { Card } from './Card';

const mockCard = {
  title: 'title',
  price: 123,
  description: '',
  category: '',
  image: '',
  rating: {
    rate: 456,
    count: 789,
  },
};

describe('<Card />', () => {
  beforeEach(() => {
    render(<Card card={mockCard} />);
  });

  it('renders rate: text', () => {
    const message = screen.getByText(/rate:/i);
    expect(message).toBeInTheDocument();
  });

  it('renders count: text', () => {
    const message = screen.getByText(/count:/i);
    expect(message).toBeInTheDocument();
  });

  it('renders Buy now button', () => {
    const message = screen.getByRole('button', { name: /Buy now/i });
    expect(message).toBeInTheDocument();
  });

  it('renders title text', () => {
    const message = screen.getByText(/title/i);
    expect(message).toBeInTheDocument();
  });

  it('renders price number', () => {
    const message = screen.getByText(/123/i);
    expect(message).toBeInTheDocument();
  });

  it('renders rate number', () => {
    const message = screen.getByText(/456/i);
    expect(message).toBeInTheDocument();
  });

  it('renders count number', () => {
    const message = screen.getByText(/789/i);
    expect(message).toBeInTheDocument();
  });
});
