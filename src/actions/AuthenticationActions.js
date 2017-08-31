import firebase from 'firebase';
import { Actions, ActionConst } from 'react-native-router-flux';
import b64 from 'base-64';
import {
  MODIFICATION_EMAIL,
  MODIFICATION_PASSWORD,
  MODIFICATION_NAME,
  REGISTER_USER_ERROR,
  MODIFICATION_REGISTER_USER_ERROR_MESSAGE,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_IN_PROGRESS,
  MODIFICATION_LOGIN_PROGRESS_START,
  MODIFICATION_LOGIN_PROGRESS_STOP,
  SIGNUP_IN_PROGRESS,
  MODIFICATION_SIGNUP_PROGRESS,
  RESET_AUTHENTICATION_REDUCER } from '../constants';

export const resetAuthenticationReducer = () => {
  console.log('');
  return {
    type: RESET_AUTHENTICATION_REDUCER
  };
};

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

export function modificationSignupProgress(status) {
  return {
    type: MODIFICATION_SIGNUP_PROGRESS,
    payload: status
  };
}

export function modificationErrorMessage() {
  return {
    type: MODIFICATION_REGISTER_USER_ERROR_MESSAGE
  };
}
export function loginProgressStart() {
  return {
    type: MODIFICATION_LOGIN_PROGRESS_START,

  };
}
export function loginProgressStop() {
  return {
    type: MODIFICATION_LOGIN_PROGRESS_STOP,

  };
}

export function authUser({ email, password }) {
  return dispatch => {
    dispatch({ type: LOGIN_IN_PROGRESS, payload: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(value => loginUserSuccess(dispatch))
      .catch(error => loginUserError(error, dispatch));
  };
}

export function registerUser({ name, email, password }) {
  return (dispatch) => {
    dispatch({ type: SIGNUP_IN_PROGRESS });
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
      const emailB64 = b64.encode(email);
      firebase.database().ref(`/contacts/${emailB64}`)
      .push({ name })
      .then(value => registerUserSuccess(dispatch));
    })
    .catch(error => registerUserError(error, dispatch));
  };
}

export const isUserLogin = () => {
  console.log('');
  return dispatch => {
    const { currentUser } = firebase.auth();
    if (currentUser != null) {
      console.log(`user sedang online ${currentUser.email}`);
      Actions.homev2({ type: ActionConst.RESET });
    } else {
      console.log('user sedang tidak online');
    }
    dispatch({ type: 'xxxx', payload: true });
  };
};

const loginUserSuccess = (dispatch) => {
  dispatch({
    type: LOGIN_USER_SUCCESS
  });
  Actions.homev2();
};
const loginUserError = (error, dispatch) => {
  dispatch({ type: LOGIN_USER_FAILED, payload: error.message });
};

const registerUserSuccess = (dispatch) => {
  dispatch({ type: REGISTER_USER_SUCCESS });
  Actions.welcome();
};

const registerUserError = (error, dispatch) => {
  dispatch({ type: REGISTER_USER_ERROR, payload: error.message });
};
