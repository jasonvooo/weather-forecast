import { fireEvent, screen } from '@testing-library/react'

import { WeatherForcast } from './WeatherForcast'
import { render } from 'test-utils'
import selectEvent from 'react-select-event'

// Util function to work around react-select
const selectItem = async (selectLabel: string, itemText: string) => {
  fireEvent.keyDown(screen.getByLabelText(selectLabel), { keyCode: 40 })
  await screen.findByText(itemText)
  fireEvent.click(await screen.findByText(itemText))
}

describe('WeatherForcast', () => {
  it.skip('User is able to search Sydney and is able to select Sydney weather', async () => {
    render(<WeatherForcast />)


    // TODO running into issue simulating button press for react-select
    fireEvent.change(await screen.findByLabelText('Please search for the location below.'), {
      target: { value: 'Sydney' },
    })
    await selectEvent.select(screen.getByLabelText('Please search for the location below.'), "Sydney")


  })
})

