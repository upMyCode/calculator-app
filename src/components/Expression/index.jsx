import PropTypes from 'prop-types'

const Expression = ({ expression, result, error }) => {
  if (expression) {
    if (error) throw new Error(error)
    if (Number(result) === Infinity) {
      throw new Error('Error: You attempted div by zero')
    }
    if (result) return `${expression} = ${result}`

    return expression
  }
}

export default Expression

Expression.propTypes = {
  error: PropTypes.string,
  result: PropTypes.string,
  expression: PropTypes.string
}
