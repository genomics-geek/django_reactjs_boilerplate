import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


// Import reducers here

const reducers = {};

const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer
});


export default rootReducer;
