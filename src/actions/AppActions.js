import firebase from 'firebase';
import b64 from 'base-64';
import _ from 'lodash';

import {
  MODIFICATION_CONTACT_EMAIL,
  MODIFICATION_CONTACT_NAME,
  ADD_CONTACT_ERR,
  RESET_APP_REDUCER,
  ADD_CONTACT_SUCCESS,
  LIST_USER_CONTACTS,
  MODIFICATION_MESSAGE,
  LIST_USER_CHATTING,
  LIST_USER_CONVERSATION,
  SEND_MESSAGE_SUCCESS } from '../constants';

export const resetAppReducer = () => {
  console.log('');
  return {
    type: RESET_APP_REDUCER
  };
};

export const modificationContactEmail = (email) => {
  console.log(email);
  return {
    type: MODIFICATION_CONTACT_EMAIL,
    payload: email
  };
};
export const modificationContactName = (name) => {
  console.log(name);
  return {
    type: MODIFICATION_CONTACT_NAME,
    payload: name
  };
};
export const modificationMessage = msg => {
  console.log(msg);
  return {
    type: MODIFICATION_MESSAGE,
    payload: msg
  };
};
export const sendMessage = (message, contactName, contactEmail) => {
  //data user
  const { currentUser } = firebase.auth();
  const userEmail = currentUser.email;

  return dispatch => {
    //data contact
    const userEmailB64 = b64.encode(userEmail);
    const contactEmailB64 = b64.encode(contactEmail);

    console.log(
      `userEmail=${userEmail}
       userEmailB64=${userEmailB64}
       contactEmail=${contactEmail}
       contactEmailB64=${contactEmailB64}`
     );

    firebase.database().ref(`/messages/${userEmailB64}/${contactEmailB64}`)
      .push({ message, type: 's', sender_email: userEmail, receiver_email: contactEmail })
      .then(() => {
          firebase.database().ref(`/messages/${contactEmailB64}/${userEmailB64}`)
            .push({ message, type: 'r', sender_email: userEmail, receiver_email: contactEmail })
            .then(() => dispatch({ type: SEND_MESSAGE_SUCCESS }));
      })
      .then(() => {
        firebase.database().ref(`/user_chats/${userEmailB64}/${contactEmailB64}`)
          .set({ name: contactName, email: contactEmail });
      })
      .then(() => {
        firebase.database().ref(`/contacts/${userEmailB64}`)
          .once('value')
          .then(snapshot => {
            const dataUser = _.first(_.values(snapshot.val()));
            firebase.database().ref(`/user_chats/${contactEmailB64}/${userEmailB64}`)
              .set({ name: dataUser.name, email: userEmail });
          });
      });
  };
};
export const addContact = (email) => {
  console.log('addContact invoked');
  return dispatch => {
    const emailB64 = b64.encode(email);
    firebase.database().ref(`/contacts/${emailB64}`)
      .once('value')
      .then(snapshot => {
        if (snapshot.val()) {
            console.log(email);
            const dataUser = _.first(_.values(snapshot.val()));
            console.log(dataUser);
            const { currentUser } = firebase.auth();
            const emailUserB64 = b64.encode(currentUser.email);
            firebase.database().ref(`/user_contacts/${emailUserB64}`)
              .push({ email, name: dataUser.name })
              .then(() => addContactSuccess(dispatch))
              .catch(err => addContactError(err.message, dispatch));
        } else {
          dispatch(
            {
              type: ADD_CONTACT_ERR,
              payload: 'E-mail not exist'
            }
          );
        }
      });
    return {
      type: MODIFICATION_CONTACT_EMAIL,
      payload: emailB64
    };
  };
};
const addContactError = (err, dispatch) => (
  dispatch(
    {
      type: ADD_CONTACT_ERR,
      payload: err
    }
  )
);
const addContactSuccess = dispatch => (
  dispatch(
    {
      type: ADD_CONTACT_SUCCESS,
      payload: true
    }
  )
);
export const habilitaIncludeContact = () => (
  {
    type: ADD_CONTACT_SUCCESS,
    payload: false
  }
);

export const userContactsFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    const emailUserB64 = b64.encode(currentUser.email);
    firebase.database().ref(`/user_contacts/${emailUserB64}`)
      .on('value', snapshot => {
        dispatch({ type: LIST_USER_CONTACTS, payload: snapshot.val() });
      });
  };
};
export const userChatsFetch = (contactEmail) => {
  console.log('AppActions.userChatsFetch invoked');
  const { currentUser } = firebase.auth();
  const emailUserB64 = b64.encode(currentUser.email);
  const contactEmailB64 = b64.encode(contactEmail);
  return dispatch => {
    console.log(`/messages/${emailUserB64}/${contactEmailB64}`);
    firebase.database().ref(`/messages/${emailUserB64}/${contactEmailB64}`)
      .on('value', snapshot => {
        dispatch({ type: LIST_USER_CHATTING, payload: snapshot.val() });
      });
  };
};

export const conversationUserFetch = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    const userEmailB64 = b64.encode(currentUser.email);
    firebase.database().ref(`/user_chats/${userEmailB64}`)
      .on('value', snapshot => {
        dispatch({ type: LIST_USER_CONVERSATION, payload: snapshot.val() });
      });
  };
};
