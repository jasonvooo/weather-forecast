import { Box, Grid, Heading } from '@chakra-ui/layout'

import { ErrorMessage } from 'Components/ErrorMessage'
import { GridItem } from '@chakra-ui/react'
import { LoadingSkeleton } from 'Components/LoadingSkeleton'
import { WeatherCard } from 'Components/WeatherCard'
import { useGetWeather } from './useGetWeather'

interface WeatherResultProps {
  location: string
}

export const WeatherResult = ({ location }: WeatherResultProps) => {
  const { isLoading, isError, currentDay, upcomingDays } = useGetWeather(location)

  if (isError) {
    return <ErrorMessage />
  }

  if (isLoading) {
    return <LoadingSkeleton />
  }

  return (
    <Box>
      <Heading marginY="2" size="md">
        Forecast for {location}
      </Heading>

      <Grid gap="2" templateColumns={{ base: 'auto', md: 'repeat(3, 1fr)' }}>
        <GridItem>
          {currentDay && (
            <WeatherCard
              label="Current Weather"
              value={`${currentDay.tempCentigrade}°C`}
              icon={currentDay.conditionIcon}
              helpText={currentDay.conditionText}
            />
          )}
        </GridItem>

        {upcomingDays?.map(
          ({ date, minTempCentigrade, maxTempCentigrade, conditionIcon, conditionText }, index) => (
            <GridItem key={index}>
              <WeatherCard
                label={date}
                value={`Min: ${minTempCentigrade}°C Max: ${maxTempCentigrade}°C`}
                icon={conditionIcon}
                helpText={conditionText}
              />
            </GridItem>
          ),
        )}
      </Grid>
    </Box>
  )
}
