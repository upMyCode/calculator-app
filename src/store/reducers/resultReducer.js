import { mathExecuterHelper } from '../../utils/mathExecuterHelper'
import { appResultState } from '../../utils/mathOperationExecuterHelper'
import { addAccuracyForExpression } from '../../utils/addAccuracyForExpression'

const initialState = {
  result: ''
}

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RESULT': {
      const schema = /\d*/g
      const allNumbersInExprList = action.payload.match(schema)
      const valueOfNumbers = allNumbersInExprList.length
      //  To check the expression of a calculator on a single number in an expression
      if (valueOfNumbers === 1) {
        return {
          result: allNumbersInExprList[0]
        }
      }
      //  To execute math expression
      const applyMath = mathExecuterHelper()
      const error = applyMath(action.payload)

      if (error) {
        return {
          result: error
        }
      }

      let result = appResultState.getResult()
      result = addAccuracyForExpression(result, 3)

      return {
        result
      }
    }
    default:
      return state
  }
}

export default resultReducer
