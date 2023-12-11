import React, { useState } from 'react'

import { Box } from '@chakra-ui/layout'
import { Heading } from '@chakra-ui/react'
import { LocationSearch } from 'Components/LocationSearch'
import { WeatherResult } from 'Components/WeatherResult'

export const WeatherForcast = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>()

  return (
    <Box>
      <Box marginTop="10" marginBottom="5">
        <Heading>Weather Forecast</Heading>
      </Box>

      <Box>
        <LocationSearch onSelect={setSelectedLocation} />
        {selectedLocation && (
          <Box marginY="5">
            <WeatherResult location={selectedLocation} />
          </Box>
        )}
      </Box>
    </Box>
  )
}
