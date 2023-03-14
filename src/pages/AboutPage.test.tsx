import {render, screen} from '@testing-library/react'
import { AboutPage } from './AboutPage'

describe('<AboutPage />', () => {
  it('should contain About us', () => {
    render(<AboutPage />)
    const message = screen.getByText(/About us/i)
    expect(message).toBeInTheDocument()
  })
})