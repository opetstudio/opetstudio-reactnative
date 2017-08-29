import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  MODIFICATION_EMAIL,
  MODIFICATION_PASSWORD,
  MODIFICATION_NAME,
  REGISTER_USER_ERROR,
  MODIFICATION_REGISTER_USER_ERROR_MESSAGE,
  REGISTER_USER_SUCCESS } from '../constants';

export function modificationEmail(text) {
  console.log(text);
  return {
    type: MODIFICATION_EMAIL,
    payload: text
  };
}

export function modificationPassword(text) {
  console.log(text);
  return {
    type: MODIFICATION_PASSWORD,
    payload: text
  };
}

export function modificationName(text) {
  console.log(text);
  return {
    type: MODIFICATION_NAME,
    payload: text
  };
}

export function modificationErrorMessage() {
  return {
    type: MODIFICATION_REGISTER_USER_ERROR_MESSAGE
  };
}

export function registerUser({ name, email, password }) {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => registerUserSuccess(dispatch))
    .catch(error => registerUserError(error, dispatch));
  };
}

const registerUserSuccess = (dispatch) => {
  dispatch({ type: REGISTER_USER_SUCCESS });
  Actions.welcome();
};

const registerUserError = (error, dispatch) => {
  dispatch({ type: REGISTER_USER_ERROR, payload: error.message });
};
