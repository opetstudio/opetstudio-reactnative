import React, { Component } from 'react';
import { Router, Scene, Stack, ActionConst } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import firebase from 'firebase';
// import { createStore } from 'redux';
// import reducer from './reducers';
import { configureStore } from './store/configureStore';


import Home from './pages/home/Home';
import Homev2 from './pages/homev2/Homev2';
import About from './pages/about/About';
import LoginPage from './pages/login/Login';
import SignupPage from './pages/signup/Signup';
// import CounterPage from './pages/counter/Counter';
import MemberPage from './pages/member/Member';
import WelcomePage from './pages/welcome/Welcome';
import AddcontactPage from './pages/addcontact/Addcontact';
import ChatPage from './pages/chat/Chat';

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
        <Router
          sceneStyle={{ paddingTop: 0 }}
          navigationBarStyle={{ backgroundColor: '#115E54' }}
          titleStyle={{ color: '#fff' }}
        >
          <Stack key="root">
            <Scene
              key="welcome"
              component={WelcomePage}
              title="Welcome"
              hideNavBar
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
              hideNavBar
              type={ActionConst.RESET}
            />
            <Scene
              key="homev2"
              component={Homev2}
              title="Homev2"
              hideNavBar
              type={ActionConst.RESET}
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
            <Scene
              key="addcontact"
              component={AddcontactPage}
              title="Add Contact"
            />
            <Scene
              key="chat"
              component={ChatPage}
              title="Chat"
            />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

// AppRegistry.registerComponent('app6', () => App);
