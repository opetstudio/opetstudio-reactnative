'use strict';

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  Button,
  ActivityIndicator
} from 'react-native';


export default class SignupBase extends Component {
  componentWillMount() {
    this.props.modificationErrorMessage();
    this.props.modificationSignupProgress(false);
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
  _renderButtonSignup() {
    if (this.props.authenticationReducer.loadingSignup) {
      return (
        <ActivityIndicator size="large" />
      );
    }
    return (
      <Button title="Signup" color="#115E54" onPress={() => this._registerUser()} />
    );
  }
}
