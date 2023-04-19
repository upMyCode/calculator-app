import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import expressionAction from '../../store/actions/expressionAction'
import resultAction from '../../store/actions/resultAction'
import errorAction from '../../store/actions/errorAction'
import {
  DisplayBlock,
  CalculatorWindow,
  CalculatorExpression,
  CalculatorWindowWrapper
} from './styled'
import { ErrorBoundary } from 'react-error-boundary'
import {
  ErrorBoundaryFallback,
  ControlPanel,
  Keypad,
  Expression
} from '../../components'

const Display = ({ handleButtonPressed }) => {
  const expression = useSelector((state) => state.expressionReducer.expression)
  const result = useSelector((state) => state.resultReducer.result)
  const error = useSelector((state) => state.errorReducer.errorMessage)
  const dispatch = useDispatch()

  useEffect(() => {
    const hasResult = Number(result)

    if (!hasResult && hasResult !== 0) {
      dispatch(errorAction(result))
    }
  }, [result])

  return (
    <DisplayBlock>
      <CalculatorWindowWrapper>
        <CalculatorWindow>
          <CalculatorExpression>
            <ErrorBoundary
              FallbackComponent={ErrorBoundaryFallback}
              onReset={() => {
                dispatch(resultAction(''))
                dispatch(expressionAction('0'))
                dispatch(errorAction(''))
              }}
            >
              <Expression
                expression={expression}
                result={result}
                error={error}
              />
            </ErrorBoundary>
          </CalculatorExpression>
        </CalculatorWindow>
        <Keypad handleButtonPressed={handleButtonPressed} />
      </CalculatorWindowWrapper>
      <ControlPanel />
    </DisplayBlock>
  )
}

export default Display
