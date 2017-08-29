'use strict';

import { Component } from 'react';
import { Actions } from 'react-native-router-flux';


export default class LoginBase extends Component {
  _onPressButton() {
    Actions.about();
  }
  _onPressButtonMember() {
    Actions.member();
  }
}
