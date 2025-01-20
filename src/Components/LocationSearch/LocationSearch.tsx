import { AsyncSelect, OptionBase } from 'chakra-react-select'

import debounce from 'lodash.debounce'
import { weatherForecastUrls } from 'api/weatherForecast'
import { useCallback } from 'react'

interface LocationSearchProps {
  onSelect(location: string | undefined): void
}

interface LocationOption extends OptionBase {
  label: string
  value: string
}

interface LocationSearchItem {
  id: string
  name: string
  region: string
  country: string
  url: string
}

const getLocations = async (location: string): Promise<LocationOption[]> => {
  const resp = await fetch(weatherForecastUrls.getLocationsUrl(location))
  if (!resp.ok) {
    throw new Error('Network error')
  }
  const data = await resp.json()

  return data.map(({ name, region, country, url }: LocationSearchItem) => ({
    label: `${name}, ${region}, ${country}`,
    value: url,
  }))
}

export const LocationSearch = ({ onSelect }: LocationSearchProps) => {
  const debouncedFetchOptions = useCallback(
    debounce((inputValue, callback) => {
      getLocations(inputValue).then(callback)
    }, 300),
    [],
  )

  return (
    <>
      <label htmlFor="location">Please search for the location below.</label>
      <AsyncSelect<LocationOption>
        isClearable
        defaultOptions
        cacheOptions
        name="location"
        placeholder="Select a location..."
        closeMenuOnSelect={false}
        size="md"
        loadOptions={debouncedFetchOptions}
        onChange={(newValue) => onSelect(newValue?.value)}
      />
    </>
  )
}
