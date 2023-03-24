const initialState = {
  operationHistory: []
}

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_HISTORY': {
      return {
        operationHistory: state.operationHistory.concat(action.payload)
      }
    }
    default:
      return state
  }
}

export default historyReducer
