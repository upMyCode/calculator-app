import React from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage, ErrorBlock, ErrorResetter } from './styled'

const ErrorBoundaryFallback = ({ error, resetErrorBoundary }) => {
  return (
    <ErrorBlock>
      <ErrorMessage data-test-target="error-message">
        {error.message}
      </ErrorMessage>
      <ErrorResetter
        data-test-target="error-message-resetter"
        onClick={resetErrorBoundary}
      >
        X
      </ErrorResetter>
    </ErrorBlock>
  )
}
export default ErrorBoundaryFallback

ErrorBoundaryFallback.propTypes = {
  error: PropTypes.object,
  resetErrorBoundary: PropTypes.func
}
