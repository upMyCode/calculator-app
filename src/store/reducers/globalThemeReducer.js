const initialState = {
  globalThemeColor: 'Light theme'
}

const globalThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GLOBAL_THEME':
      return {
        globalThemeColor: action.payload
      }

    default:
      return state
  }
}

export default globalThemeReducer
