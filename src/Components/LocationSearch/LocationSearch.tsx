import { AsyncSelect, OptionBase } from 'chakra-react-select'

import { weatherForecastUrls } from 'api/weatherForecast'

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
}

const getLocations = async (location: string): Promise<LocationOption[]> => {
  const resp = await fetch(weatherForecastUrls.getLocationsUrl(location))
  if (!resp.ok) {
    throw new Error("Network error")
  }
  const data = await resp.json()

  return data.map(({ name }: LocationSearchItem) => ({
    label: name,
    value: name,
  }))
}

export const LocationSearch = ({ onSelect }: LocationSearchProps) => {
  return (
    <>
      <label htmlFor="location">
        Please search for the location below.
      </label>
      <AsyncSelect<LocationOption>
        isClearable
        defaultOptions
        cacheOptions
        name="location"
        placeholder="Select a location..."
        closeMenuOnSelect={false}
        size="md"
        loadOptions={async (location, callback) => {
          const data = await getLocations(location)
          callback(data)
        }}
        onChange={(newValue) => onSelect(newValue?.value)}
      />
    </>
  )
}
