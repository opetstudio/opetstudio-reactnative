import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import dataReducer from './dataReducer';


const rootReducer = combineReducers({
  dataReducer,
  router
});
export default rootReducer;
