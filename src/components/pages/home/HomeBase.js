'use strict';

import { Component } from 'react';

export default class HomeBase extends Component {
  _onPressButton() {
    console.log('_onPressButton invoked');
  }
  _onPressButtonCounter() {
    console.log('_onPressButtonCounter invoked');
  }
}