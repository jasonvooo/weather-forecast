import { render, screen } from "@testing-library/react"

import { ErrorMessage } from "./ErrorMessage"

describe("ErrorMessage", () => {
  it('Exepect message to be shown when rendered', () => {
    render(<ErrorMessage/>)
    expect(screen.getByText('There was an error processing your request, please try again.'))
  })
})