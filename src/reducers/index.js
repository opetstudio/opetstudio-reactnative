import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import dataReducer from './dataReducer';
import usersReducer from './usersReducer';
import authenticationReducer from './authenticationReducer';

const rootReducer = combineReducers({
  dataReducer,
  usersReducer,
  authenticationReducer,
  router
});
export default rootReducer;
