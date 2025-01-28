import { WeatherForcast } from './WeatherForcast'
import { render, screen } from '@/test-utils'
import selectEvent from 'react-select-event'

import userEvent from '@testing-library/user-event'

describe('WeatherForcast', () => {
  it.skip('User is able to search Sydney and is able to select Sydney weather', async () => {
    render(<WeatherForcast />)

    userEvent.selectOptions(
      screen.getByPlaceholderText('Select a location...'),
      'City of Sydney, New South Wales, Australia',
    )

    await selectEvent.select(
      await screen.findByText('Please search for the location below.'),
      'City of Sydney, New South Wales, Australia',
    )

    expect(await screen.findAllByText('City of Sydney')).toBe(2)
  })
})
