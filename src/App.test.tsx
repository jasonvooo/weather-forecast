import { App } from "./App"
import React from "react"
import { render } from "./test-utils"
import { screen } from "@testing-library/react"

test("renders initial page", () => {
  render(<App />)
  expect(screen.getByText(/weather forecast/i)).toBeInTheDocument()
})
