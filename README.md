This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

# Task
The coding exercise we’d like to work on is building an app where you can input a city name to show the current weather in that city area and the forecast for the current and upcoming 2 days. You may use www.weatherapi.com, which provides a free API to query weather data. It does require signing up to generate an API key but there is an interactive API explorer that makes it easy to check the response. 

You are free to use any frontend libraries to build this web application. Once you have built the application please send the code back to us in a .zip file (without any modules that can be fetched from the internet) so that we can check its functionality locally on our machine. 

We will spend some time discussing your solution during the programming interview. Please treat this task like a feature you would build as an engineer using developer best practices and deploy in a production ready state.

What we look for in your app
A readme on how to run the application. Feel free to add any design decisions or assumptions that you made when building this application. 
A simple but attractive design. We care more about functionality however, so feel free to use any UI library of your choosing to assist with this.
Unit test for key components/files.
Code easy to follow with proper naming conventions & folder structure. You are free to use any bootstrapping library as a base for your approach (like create-react-app)
We care more about clean and readable code with an easy to follow coding structure. You are not expected to complete everything. Add a @todo comment if necessary to explain any areas you were not able to get to on time.  

## How to run 
1. `nvm use` (v16.13.2)
2. `npm install`
3. `npm start`

## Architecture
- Create React App (CRA) Typescript
- react-query for querying library
- chakra-ui for design system 
- react-select for async input selection
- mock service worker (MSW) for mocking API requests for tests

Functionality
- Autocomplete search based on known location
- Displays weather for currently as well as min and max temperature for the following two days
- Responsive display

## TODO / Improvements
- Ran out of time to complete unit test flow using user input due to issues ran into using react-select, would looke to use a different select library in future
- Additional unit tests for smaller components WeatherCard and LocationSearch
- Future improvement would be to abstract locales into seperate files to support i18n if required in future
- Abstract API_KEY to be consumed via .env
- Would look to enhance UI view to display more information like wind, rain and uv index to provide more information
- Future improvement would be to include routing within the app so the search parameter would be updated to the URL. This will allow a link to the location could be shared.
- Future improvement would be the styling, it is very basic design additionally the date formating could be improved into more readable format.