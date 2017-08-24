'use strict';

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';
// import { createStore } from 'redux';
// import reducer from './reducers';
import { configureStore } from './store/configureStore';

import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import CounterPage from './components/pages/counter/Counter';

const store = configureStore();
persistStore(store, { storage: AsyncStorage }, () => {
  console.log('restored');
});
// const store = createStore(reducer);


export default class RouterMobile extends Component {
  render() {
    return (
      <Provider store={store}>
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
            <Scene
              key="counter"
              component={CounterPage}
              title="Counter"
            />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

// AppRegistry.registerComponent('app6', () => App);
