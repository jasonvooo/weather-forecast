import { Box, ChakraProvider, theme } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import React from 'react'
import { WeatherForcast } from './Components/WeatherForcast'

const queryClient = new QueryClient()

export const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Box fontSize="xl" margin="10">
        <WeatherForcast />
      </Box>
    </QueryClientProvider>
  </ChakraProvider>
)
