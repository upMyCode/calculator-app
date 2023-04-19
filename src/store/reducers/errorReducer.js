const initialState = {
  errorMessage: ''
}

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        errorMessage: action.payload
      }
    default:
      return state
  }
}

export default errorReducer
