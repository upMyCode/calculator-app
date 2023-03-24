const initialState = {
  expression: '0'
}

//  This reducer set expression on calculator
const expressionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EXPRESSION':
      return {
        expression: action.payload
      }
    default:
      return state
  }
}

export default expressionReducer
