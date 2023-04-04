import { createStore, combineReducers } from 'redux'
import expressionReducer from './reducers/expressionReducer'
import resultReducer from './reducers/resultReducer'
import historyReducer from './reducers/historyReducer'
import globalThemeReducer from './reducers/globalThemeReducer'

const reducers = combineReducers({
  expressionReducer,
  resultReducer,
  historyReducer,
  globalThemeReducer
})

const store = createStore(reducers)

export default store
