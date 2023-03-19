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
  it('renders rate: text', () => {
    render(<Card card={mockCard} />);
    const message = screen.getByText(/rate:/i);
    expect(message).toBeInTheDocument();
  });

  it('renders count: text', () => {
    render(<Card card={mockCard} />);
    const message = screen.getByText(/count:/i);
    expect(message).toBeInTheDocument();
  });
  
  it('renders Buy now button', () => {
    render(<Card card={mockCard} />);
    const message = screen.getByRole('button', {name: /Buy now/i});
    expect(message).toBeInTheDocument();
  })
});

describe('<Card />', () => {
  it('renders title text', () => {
    render(<Card card={mockCard} />);
    const message = screen.getByText(/title/i);
    expect(message).toBeInTheDocument();
  });

  it('renders price number', () => {
    render(<Card card={mockCard} />);
    const message = screen.getByText(/123/i);
    expect(message).toBeInTheDocument();
  });

  it('renders rate number', () => {
    render(<Card card={mockCard} />);
    const message = screen.getByText(/456/i);
    expect(message).toBeInTheDocument();
  });

  it('renders count number', () => {
    render(<Card card={mockCard} />);
    const message = screen.getByText(/789/i);
    expect(message).toBeInTheDocument();
  });
});