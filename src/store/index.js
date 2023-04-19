import { createStore, combineReducers } from 'redux'
import expressionReducer from './reducers/expressionReducer'
import resultReducer from './reducers/resultReducer'
import historyReducer from './reducers/historyReducer'
import globalThemeReducer from './reducers/globalThemeReducer'
import errorReducer from './reducers/errorReducer'

const reducers = combineReducers({
  expressionReducer,
  resultReducer,
  historyReducer,
  globalThemeReducer,
  errorReducer
})

const store = createStore(reducers)

export default store
