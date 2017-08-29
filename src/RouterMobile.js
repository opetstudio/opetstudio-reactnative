import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import firebase from 'firebase';
// import { createStore } from 'redux';
// import reducer from './reducers';
import { configureStore } from './store/configureStore';


import Home from './pages/home/Home';
import About from './pages/about/About';
import LoginPage from './pages/login/Login';
import SignupPage from './pages/signup/Signup';
// import CounterPage from './pages/counter/Counter';
import MemberPage from './pages/member/Member';
import WelcomePage from './pages/welcome/Welcome';

const store = configureStore();
persistStore(store, { storage: AsyncStorage }, () => {
  console.log('restored');
});
// const store = createStore(reducer);


export default class RouterMobile extends Component {
  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyBRfY8G4OSOapqJPOGzs4j7MaNskvl_CQc',
      authDomain: 'whatsapp-clone-dd7f3.firebaseapp.com',
      databaseURL: 'https://whatsapp-clone-dd7f3.firebaseio.com',
      projectId: 'whatsapp-clone-dd7f3',
      storageBucket: 'whatsapp-clone-dd7f3.appspot.com',
      messagingSenderId: '583288508388'
    });
  }
  render() {
    return (
      <Provider store={store}>
        <Router sceneStyle={{ paddingTop: 0 }}>
          <Stack key="root">
            <Scene
              key="welcome"
              component={WelcomePage}
              title="Welcome"
              initial
            />
            <Scene
              key="signup"
              component={SignupPage}
              title="Signup"
            />
            <Scene
              key="login"
              component={LoginPage}
              title="Login"
            />
            <Scene
              key="home"
              component={Home}
              title="Home"
            />
            <Scene
              key="about"
              component={About}
              title="About"
            />
            <Scene
              key="member"
              component={MemberPage}
              title="Member"
            />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

// AppRegistry.registerComponent('app6', () => App);
