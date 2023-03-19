import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';

describe('<Header />', () => {
  it('should contain React', () => {
    render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
    );
    const message = screen.getByText(/React 20223Q1/i);
    expect(message).toBeInTheDocument();
  });

  it('renders Main link', () => {
     render(
       <BrowserRouter>
         <Header />
       </BrowserRouter>
     );
     const linkElement = screen.getByText(/Main/i);
     expect(linkElement).toBeInTheDocument();
  })

  it('renders About us link', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const linkElement = screen.getByText(/About us/i);
    expect(linkElement).toBeInTheDocument();
  });
});
