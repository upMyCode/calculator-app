import { createStore } from 'redux';
import { combineReducers } from 'redux';
import expressionReducer from './reducers/expressionReducer';
import resultReducer from './reducers/resultReducer';

const reducers = combineReducers({expressionReducer, resultReducer});

const store = createStore(reducers);

export default store;