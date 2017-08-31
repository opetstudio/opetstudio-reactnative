import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import dataReducer from './dataReducer';
import usersReducer from './usersReducer';
import authenticationReducer from './authenticationReducer';
import appReducer from './appReducer';
import listContactsReducer from './listContactsReducer';
import listChattingReducer from './listChattingReducer';
import listChatsReducer from './listChatsReducer';

const rootReducer = combineReducers({
  appReducer,
  dataReducer,
  usersReducer,
  authenticationReducer,
  listContactsReducer,
  listChattingReducer,
  listChatsReducer,
  router
});
export default rootReducer;
