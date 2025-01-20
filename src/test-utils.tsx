import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RenderOptions, render } from '@testing-library/react'
import { Provider } from '@/components/ui/provider'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retryDelay: 1,
      retry: 0,
    },
  },
})

const AllProviders = ({ children }: { children?: React.ReactNode }) => (
  <Provider>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </Provider>
)

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
