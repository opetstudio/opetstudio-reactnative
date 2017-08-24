'use strict';

import { Component } from 'react';


export default class CounterBase extends Component {
  _onPressButton() {
    this.props.fetchData();
    console.log('_onPressButton invoked');
  }
}
