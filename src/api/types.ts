
interface WeatherCondition {
  text: string
  icon: string
}

export interface WeatherResponse {
  current: {
    temp_c: number
    last_updated: string
    condition: WeatherCondition
  }
  forecast: {
    forecastday: Array<{
      date: string
      day: {
        mintemp_c: number
        maxtemp_c: number,
        condition: WeatherCondition
      }
    }>
  }
}
