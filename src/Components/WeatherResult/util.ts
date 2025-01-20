import { CurrentWeatherDay, UpcomingWeatherDay } from './types'

import { WeatherResponse } from 'api/types'

interface TransformWeatherResponseReturn {
  currentDay: CurrentWeatherDay | undefined
  upcomingDays: UpcomingWeatherDay[] | undefined
}

// TODO Write unit test for this transformation
export const transformWeatherResponse = (
  data: WeatherResponse | undefined,
): TransformWeatherResponseReturn => {
  // If no data yet return undefined
  if (!data)
    return {
      currentDay: undefined,
      upcomingDays: undefined,
    }

  const currentDay: CurrentWeatherDay = {
    date: data.current.last_updated,
    conditionIcon: data.current.condition.icon,
    conditionText: data.current.condition.text,
    tempCentigrade: data.current.temp_c,
  }

  // If no valid upcoming forcasts then return
  if (data.forecast.forecastday.length < 3) {
    return {
      currentDay,
      upcomingDays: undefined,
    }
  }

  const upcomingDays: UpcomingWeatherDay[] = [
    {
      date: data.forecast.forecastday[1].date,
      conditionIcon: data.forecast.forecastday[1].day.condition.icon,
      conditionText: data.forecast.forecastday[1].day.condition.text,
      maxTempCentigrade: data.forecast.forecastday[1].day.maxtemp_c,
      minTempCentigrade: data.forecast.forecastday[1].day.mintemp_c,
    },
    {
      date: data.forecast.forecastday[2].date,
      conditionIcon: data.forecast.forecastday[2].day.condition.icon,
      conditionText: data.forecast.forecastday[2].day.condition.text,
      maxTempCentigrade: data.forecast.forecastday[2].day.maxtemp_c,
      minTempCentigrade: data.forecast.forecastday[2].day.mintemp_c,
    },
  ]

  return {
    currentDay,
    upcomingDays,
  }
}
