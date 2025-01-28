interface WeatherDay {
  date: string
  conditionText: string
  conditionIcon: string
}

export interface CurrentWeatherDay extends WeatherDay {
  tempCentigrade: number
}

export interface UpcomingWeatherDay extends WeatherDay {
  minTempCentigrade: number
  maxTempCentigrade: number
}
