import { App } from './App'
import { render } from './test-utils'
import { screen } from '@testing-library/react'

test('renders initial page', () => {
  render(<App />)
  expect(screen.getByText(/weather forecast/i)).toBeInTheDocument()
})
