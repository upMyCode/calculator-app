import React, { useEffect, useState } from 'react'
import { CalculatorBlock } from './styled'
import { Display } from '../index'
import { digits, operators, usedKeyCodes } from '../../constants/KeyCodes'
import expressionAction from '../../store/actions/expressionAction'
import resultAction from '../../store/actions/resultAction'
import historyAction from '../../store/actions/historyAction'
import { useDispatch, useSelector } from 'react-redux'

const Calculator = () => {
  const dispatch = useDispatch()
  const [countOpenParentheses, setCountOpenParentheses] = useState(0)

  const expression = useSelector((state) => state.expressionReducer.expression)

  useEffect(() => {
    if (expression === '') {
      dispatch(expressionAction('0'))
    }
  }, [expression, dispatch])

  const handleButtonPressed = (keyCode, key) => {
    if (!keyCode) return
    if (!usedKeyCodes.includes(keyCode)) return

    if (digits.includes(key)) {
      if (key === '0') {
        const lastChar = expression.trim().slice(-1)

        if (expression === '0') return
        if (lastChar === ')') return
      }
      if (expression !== '0') {
        const lastChar = expression.trim().slice(-1)

        if (lastChar === ')') return
        dispatch(expressionAction(`${expression}${key}`))
        dispatch(resultAction(''))
      } else {
        dispatch(expressionAction(key))
        dispatch(resultAction(''))
      }
    } else if (operators.includes(key)) {
      const lastChar = expression.trim().slice(-1)

      if (lastChar === '.') return

      if (key === '(' || key === ')') {
        const lastChar = expression.trim().slice(-1)

        if (lastChar === '0' && expression.length > 1) return
        if (key === '(' && digits.includes(lastChar) && lastChar !== '0') return
        if (key === ')' && lastChar === '(') return
        if (key === '(' && lastChar === ')') return
        if (key === ')' && !digits.includes(lastChar) && lastChar !== ')') {
          return
        }
        if (key === ')' && digits.includes(lastChar)) {
          if (countOpenParentheses === 0) return
          setCountOpenParentheses((prev) => prev - 1)
        }
        if (key === ')' && operators.includes(lastChar)) {
          if (countOpenParentheses === 0) return
          setCountOpenParentheses((prev) => prev - 1)
        }
        if (key === '(') {
          setCountOpenParentheses((prev) => prev + 1)
        }
        dispatch(expressionAction(`${expression}${key}`))
      }

      if (operators.includes(lastChar)) {
        if (lastChar !== ')' && lastChar !== '(') return
      }

      if (expression === '0') {
        if (expression === '0' && key === '(') {
          dispatch(expressionAction(`${key}`))
        }
        if (expression === '0' && key === '-') {
          dispatch(expressionAction(`${key}`))
        }
        if (expression === '0' && key === '+') {
          dispatch(expressionAction(`${key}`))
        }
        if (expression === '0' && key === '*') {
          dispatch(expressionAction(`${key}`))
        }
        if (expression === '0' && key === '/') {
          dispatch(expressionAction(`${key}`))
        }
      } else {
        dispatch(expressionAction(`${expression}${key}`))
      }
    }

    if (key === '.') {
      const lastChar = expression.slice(-1)
      const schema = /\d+\./g

      const valueOfPeriod = expression.match(schema)
      console.log(valueOfPeriod)
      if (valueOfPeriod > 1) return
      if (!digits.includes(lastChar)) return

      dispatch(expressionAction(`${expression}${key}`))
    }

    if (keyCode === 8) {
      if (expression === '0') return

      const newExpression = expression.slice(0, -1)
      dispatch(expressionAction(`${newExpression}`))
      dispatch(resultAction(''))

      const lastChar = expression.trim().slice(-1)

      if (lastChar === '(' && countOpenParentheses > 0) {
        setCountOpenParentheses((prev) => prev - 1)
      }
      if (lastChar === ')') {
        setCountOpenParentheses((prev) => prev + 1)
      }
    }

    if (keyCode === 13) {
      if (expression === '0') return

      dispatch(resultAction(expression))
      dispatch(historyAction(expression))
    }

    if (keyCode === 67) {
      dispatch(expressionAction('0'))
      dispatch(resultAction(''))
    }
  }

  return (
    <CalculatorBlock
      onKeyDown={(event) => handleButtonPressed(event.keyCode, event.key)}
      tabIndex={-1}
    >
      <Display handleButtonPressed={handleButtonPressed} />
    </CalculatorBlock>
  )
}

export default Calculator
