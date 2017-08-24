import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import dataReducer from './dataReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  dataReducer,
  usersReducer,
  router
});
export default rootReducer;
