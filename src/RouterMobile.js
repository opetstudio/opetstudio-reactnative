'use strict';

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './components/Home';
import About from './components/About';


export default class RouterMobile extends Component {
  render() {
    return (
      <Router sceneStyle={{ paddingTop: 0 }}>
        <Scene key="root">
          <Scene
            key="home"
            component={Home}
            title="Home"
            initial
          />
          <Scene
            key="about"
            component={About}
            title="About"
          />
        </Scene>
      </Router>
    );
  }
}

// AppRegistry.registerComponent('app6', () => App);
