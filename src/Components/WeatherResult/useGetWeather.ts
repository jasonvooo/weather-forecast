import { WeatherResponse } from 'api/types'
import { transformWeatherResponse } from './util'
import { useQuery } from '@tanstack/react-query'
import { weatherForecastUrls } from 'api/weatherForecast'

export const useGetWeather = (location: string) => {
  const { isLoading, isError, error, data } = useQuery<WeatherResponse>({
    queryKey: ['UpcomingWeather', location],
    queryFn: async () => {
      const resp = await fetch(weatherForecastUrls.getUpcomingWeatherUrl(location))
      if (!resp.ok) {
        throw new Error('Network error')
      }
      return resp.json()
    },
  })

  const { currentDay, upcomingDays } = transformWeatherResponse(data)

  return {
    isLoading,
    isError,
    error,
    currentDay,
    upcomingDays,
  }
}
