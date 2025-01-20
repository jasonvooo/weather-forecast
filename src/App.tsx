import { Box } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Provider } from '@/components/ui/provider'

import { WeatherForcast } from '@/components/WeatherForcast'

const queryClient = new QueryClient()

export const App = () => (
  <Provider>
    <QueryClientProvider client={queryClient}>
      <Box fontSize="xl" margin="10">
        <WeatherForcast />
      </Box>
    </QueryClientProvider>
  </Provider>
)
