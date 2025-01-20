import { WeatherResult } from './WeatherResult'
import { render } from '@/test-utils'
import { http, HttpResponse } from 'msw'
import { screen } from '@testing-library/react'
import { server } from '@/mocks/server'

describe('WeatherResult', () => {
  it('Displays correct forcast for Sydney', async () => {
    render(<WeatherResult location="Sydney" />)

    // Expect header
    expect(await screen.findByText('Forecast for Sydney')).toBeInTheDocument()
    expect(screen.getByText('Current Weather')).toBeInTheDocument()
    // Expect current temperature
    expect(screen.getByText('23°C')).toBeInTheDocument()

    // Expect date and temperature for tomorrow

    expect(screen.getByText('2022-01-26')).toBeInTheDocument()

    expect(screen.getByText('Min: 19.8°C Max: 24.7°C')).toBeInTheDocument()

    // Expect date and temperature for 2 days from today
    expect(screen.getByText('2022-01-27')).toBeInTheDocument()
    expect(screen.getByText('Min: 20.6°C Max: 27.5°C')).toBeInTheDocument()
  })
  it('Displays error state for API error', async () => {
    server.use(
      http.get('http://api.weatherapi.com/v1/forecast.json', () => {
        // Simulate 401 error
        return new HttpResponse(null, { status: 401 })
      }),
    )
    render(<WeatherResult location="Sydney" />)

    expect(
      await screen.findByText('There was an error processing your request, please try again.'),
    ).toBeInTheDocument()
  })
})
