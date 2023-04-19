import React from 'react'
import { ErrorMessage, ErrorBlock, ErrorResetter } from './styled'

const ErrorBoundaryFallback = ({ error, resetErrorBoundary }) => {
  return (
    <ErrorBlock>
      <ErrorMessage>{error.message}</ErrorMessage>
      <ErrorResetter onClick={resetErrorBoundary}>X</ErrorResetter>
    </ErrorBlock>
  )
}
export default ErrorBoundaryFallback
