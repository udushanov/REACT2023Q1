import { render, screen } from '@testing-library/react';
import App from './App';
import { createMemoryHistory } from 'history'
import { BrowserRouter, Router, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

// describe('<App />', () => {
//   const history = createMemoryHistory()
//   it('should render hte home page', () => {
//     render(
//       <Router navigator={history}>
//         <App />
//       </Router>
//     );
//     const message = screen.getByPlaceholderText(/Search card here.../i);
//     expect(message).toBeInTheDocument();
//   });
// });

// describe('full app rendering/navigating', async () => {
//   render(<App />, {wrapper: BrowserRouter})
//   const user = userEvent.setup()

//   expect(screen.getByPlaceholderText(/Search card here.../i)).toBeInTheDocument();

  // await user.click(screen.getByText(/about/i))
  // expect(screen.findByText(/About us/i)).toBeInTheDocument();
// })

describe('<App />', () => {
  it('landing on a bad page', () => {
    const badRoute = '/some/bad/route';
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Not found page/i)).toBeInTheDocument();
  });
});