import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';

describe('<Header />', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  it('should contain React', () => {
    const message = screen.getByText(/React 20223Q1/i);
    expect(message).toBeInTheDocument();
  });

  it('renders Main link', () => {
    const linkElement = screen.getByRole('link', { name: /Main/i });
    expect(linkElement).toBeInTheDocument();
  });

  it('renders About us link', () => {
    const linkElement = screen.getByRole('link', { name: /About us/i });
    expect(linkElement).toBeInTheDocument();
  });
});
