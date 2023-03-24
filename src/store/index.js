import { createStore } from 'redux'
import { combineReducers } from 'redux'
import expressionReducer from './reducers/expressionReducer'
import resultReducer from './reducers/resultReducer'
import historyReducer from './reducers/historyReducer'

const reducers = combineReducers({
  expressionReducer,
  resultReducer,
  historyReducer
})

const store = createStore(reducers)

export default store
