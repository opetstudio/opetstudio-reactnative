import {
  MODIFICATION_EMAIL,
  MODIFICATION_PASSWORD,
  MODIFICATION_NAME,
  REGISTER_USER_ERROR,
  MODIFICATION_REGISTER_USER_ERROR_MESSAGE,
  REGISTER_USER_SUCCESS } from '../constants';

const initialState = {
  name: '',
  email: '',
  password: '',
  errorRegisteredMessage: ''
};

const authenticationReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case MODIFICATION_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    case MODIFICATION_PASSWORD:
      return {
        ...state,
        password: action.payload
      };
    case MODIFICATION_NAME:
      return {
        ...state,
        name: action.payload
      };
    case MODIFICATION_REGISTER_USER_ERROR_MESSAGE:
      return {
        ...state,
        errorRegisteredMessage: ''
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        errorRegisteredMessage: action.payload
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        name: '',
        password: ''
      };
    default:
      return state;
    }
};

export default authenticationReducer;
