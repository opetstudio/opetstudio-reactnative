'use strict';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  Button,
  ActivityIndicator
} from 'react-native';


export default class LoginBase extends Component {
  componentWillMount() {
    this.props.loginProgressStop();
  }
  _authUser() {
    const { email, password } = this.props.authenticationReducer;
    this.props.authUser({ email, password });
  }
  _onPressButton() {
    Actions.about();
  }
  _onPressButtonMember() {
    Actions.member();
  }
  _renderButtonLogin() {
    console.log(`_renderButtonLogin=>${this.props.loadingLogin}`);
    if (this.props.authenticationReducer.loadingLogin) {
      return (
        <ActivityIndicator size="large" />
      );
    }
    return (
      <Button title="Login" color="#115E54" onPress={() => this._authUser()} />
    );
  }
}
