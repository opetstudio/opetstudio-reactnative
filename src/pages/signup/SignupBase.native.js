'use strict';

import { Component } from 'react';
import { Actions } from 'react-native-router-flux';


export default class SignupBase extends Component {
  componentWillMount() {
    this.props.modificationErrorMessage();
  }
  _registerUser() {
    const { name, email, password } = this.props.authenticationReducer;
    this.props.registerUser({ name, email, password });
  }
  _onPressButton() {
    Actions.about();
  }
  _onPressButtonMember() {
    Actions.member();
  }
}
