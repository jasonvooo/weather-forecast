import { rest } from 'msw'
import { weatherForecastUrls } from 'api/weatherForecast'

export const handlers = [
  rest.get('http://api.weatherapi.com/v1/search.json', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 136022,
          name: 'Sydney',
          region: 'New South Wales',
          country: 'Australia',
          lat: -33.88,
          lon: 151.22,
          url: 'sydney-new-south-wales-australia',
        },
        {
          id: 129476,
          name: 'City Of Sydney',
          region: 'New South Wales',
          country: 'Australia',
          lat: -33.88,
          lon: 151.22,
          url: 'city-of-sydney-new-south-wales-australia',
        },
        {
          id: 135990,
          name: 'Surry Hills',
          region: 'New South Wales',
          country: 'Australia',
          lat: -33.89,
          lon: 151.21,
          url: 'surry-hills-new-south-wales-australia',
        },
        {
          id: 134666,
          name: 'Paddington',
          region: 'New South Wales',
          country: 'Australia',
          lat: -33.89,
          lon: 151.23,
          url: 'paddington-new-south-wales-australia',
        },
        {
          id: 136668,
          name: 'Ultimo',
          region: 'New South Wales',
          country: 'Australia',
          lat: -33.88,
          lon: 151.2,
          url: 'ultimo-new-south-wales-australia',
        },
        {
          id: 135067,
          name: 'Potts Point',
          region: 'New South Wales',
          country: 'Australia',
          lat: -33.87,
          lon: 151.23,
          url: 'potts-point-new-south-wales-australia',
        },
        {
          id: 135800,
          name: 'South Sydney Municipality',
          region: 'New South Wales',
          country: 'Australia',
          lat: -33.9,
          lon: 151.2,
          url: 'south-sydney-municipality-new-south-wales-australia',
        },
        {
          id: 130094,
          name: 'Darling Point',
          region: 'New South Wales',
          country: 'Australia',
          lat: -33.87,
          lon: 151.24,
          url: 'darling-point-new-south-wales-australia',
        },
        {
          id: 135137,
          name: 'Pyrmont',
          region: 'New South Wales',
          country: 'Australia',
          lat: -33.87,
          lon: 151.19,
          url: 'pyrmont-new-south-wales-australia',
        },
        {
          id: 136293,
          name: 'The Glebe',
          region: 'New South Wales',
          country: 'Australia',
          lat: -33.88,
          lon: 151.19,
          url: 'the-glebe-new-south-wales-australia',
        },
      ]),
    )
  }),
  rest.get('http://api.weatherapi.com/v1/forecast.json', (req, res, ctx) => {
    return res(
      ctx.json({
        location: {
          name: 'Sydney',
          region: 'New South Wales',
          country: 'Australia',
          lat: -33.88,
          lon: 151.22,
          tz_id: 'Australia/Sydney',
          localtime_epoch: 1643109374,
          localtime: '2022-01-25 22:16',
        },
        current: {
          last_updated: '2022-01-25 22:15',
          temp_c: 23.0,
          condition: {
            text: 'Partly cloudy',
            icon: '//cdn.weatherapi.com/weather/64x64/night/116.png',
            code: 1003,
          },
          wind_mph: 10.5,
          wind_kph: 16.9,
          wind_degree: 60,
          wind_dir: 'ENE',
          pressure_mb: 1011.0,
          pressure_in: 29.85,
          precip_mm: 0.0,
          precip_in: 0.0,
          humidity: 65,
          cloud: 75,
          feelslike_c: 25.0,
          feelslike_f: 77.0,
          vis_km: 10.0,
          vis_miles: 6.0,
          uv: 1.0,
          gust_mph: 11.6,
          gust_kph: 18.7,
        },
        forecast: {
          forecastday: [
            {
              date: '2022-01-25',
              day: {
                maxtemp_c: 25.2,
                mintemp_c: 20.2,
                condition: {
                  text: 'Patchy rain possible',
                  icon: '//cdn.weatherapi.com/weather/64x64/day/176.png',
                },
              },
            },
            {
              date: '2022-01-26',
              date_epoch: 1643155200,
              day: {
                maxtemp_c: 24.7,
                mintemp_c: 19.8,
                condition: {
                  text: 'Partly cloudy',
                  icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
                },
              },
            },
            {
              date: '2022-01-27',
              day: {
                maxtemp_c: 27.5,
                mintemp_c: 20.6,
                condition: {
                  text: 'Sunny',
                  icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
                },
              },
            },
          ],
        },
      }),
    )
  }),
]
