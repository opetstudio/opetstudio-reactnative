

'use strict';

import React from 'react';
import { Actions } from 'react-native-router-flux';
import {
  // StyleSheet,
  View,
  Text,
  // Dimensions,
  TouchableHighlight,
  Button,
  Image,
  TextInput
} from 'react-native';

// import Screen from './Screen';

// const logo = require('../img/rayasem-logo-color.png');
const bg = require('../../img/bg3.jpg');

// const { height, width } = Dimensions.get('window');

// const box_count = 3;

// const box_height = (height / box_count) - 70;
// const box_width = width - 50;

export default function () {
  return (
    <Image style={{ flex: 1, width: null }} source={bg}>
      <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 25, color: '#fff' }}>Whatsapp Clone</Text>
        </View>
        <View style={{ flex: 2 }}>
          <TextInput
            value={this.props.authenticationReducer.email}
            style={{ fontSize: 20, height: 45, color: '#fff' }}
            onChangeText={text => this.props.modificationEmail(text)}
            placeholder="E-mail"
            placeholderTextColor='#a9acad'
          />
          <TextInput
            secureTextEntry
            value={this.props.authenticationReducer.password}
            style={{ fontSize: 20, height: 45, color: '#fff' }}
            onChangeText={text => this.props.modificationPassword(text)}
            placeholder="Password"
            placeholderTextColor='#a9acad'
          />
          <Text
            style={{ color: '#ff0000', fontSize: 18 }}
          >
            {this.props.authenticationReducer.errorLoginMessage}
          </Text>
          <TouchableHighlight onPress={() => Actions.signup()}>
            <Text
              style={{ fontSize: 20, height: 45, color: '#fff' }}
            >
              Belum punya akun? klik daftar
            </Text>
          </TouchableHighlight>
        </View>
        <View style={{ flex: 2 }}>
            {this._renderButtonLogin()}
        </View>
      </View>
  </Image>
  );
}

// const styles = StyleSheet.create({
//   menuText: {
//     color: '#FFFFFF',
//     fontSize: 48
//   },
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     width: box_width,
//     height: box_height,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   box1: {
//     backgroundColor: '#2196F3'
//   },
//   box2: {
//     backgroundColor: '#8BC34A',
//     marginTop: 30,
//     marginBottom: 30
//   },
//   box3: {
//     backgroundColor: '#e3aa1a'
//   }
// });
