const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export const weatherForecastUrls = {
  getUpcomingWeatherUrl: (location: string) =>
    `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${location}&days=3&aqi=no&alerts=yes`,
  getLocationsUrl: (location: string) =>
    `http://api.weatherapi.com/v1/search.json?key=${WEATHER_API_KEY}&q=${location}}`,
}
