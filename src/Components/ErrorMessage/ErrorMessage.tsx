import { Alert, AlertIcon } from '@chakra-ui/react'

export const ErrorMessage = () => (
  <Alert status="error">
    <AlertIcon />
    There was an error processing your request, please try again.
  </Alert>
)
