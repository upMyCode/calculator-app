import { createStore } from 'redux';
import { combineReducers } from 'redux';
import expressionReducer from "./reducers/expressionReducer";

const reducers = combineReducers({expressionReducer});

const store = createStore(reducers);

export default store;