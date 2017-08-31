'use strict';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Component } from 'react';

export default class WelcomeBase extends Component {
  _gotoLoginPage() {
    Actions.login({ type: ActionConst.RESET });
  }
}
