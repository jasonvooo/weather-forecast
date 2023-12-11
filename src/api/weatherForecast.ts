// This should be served via .env if it were to be pushed to a git repo, for this exercise I will keep here for convenience 
const WEATHER_API_KEY = 'eb8e684d242b40aab2c73333222501' || process.env.REACT_APP_WEATHER_API_KEY

export const weatherForecastUrls = {
  getUpcomingWeatherUrl: (location: string) =>
    `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${location}&days=3&aqi=no&alerts=yes`,
  getLocationsUrl: (location: string) =>
    `http://api.weatherapi.com/v1/search.json?key=${WEATHER_API_KEY}&q=${location}}`,
}
