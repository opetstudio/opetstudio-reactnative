

'use strict';

import React from 'react';

import {
  // StyleSheet,
  View,
  // Dimensions,
  Text,
  Image,
  Button,
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
        <View style={{ flex: 4, justifyContent: 'center' }}>
          <TextInput
            value={this.props.authenticationReducer.name}
            style={{ fontSize: 20, height: 45, color: '#fff' }}
            placeholder="Name"
            placeholderTextColor='#FFF'
            onChangeText={text => this.props.modificationName(text)}
          />
          <TextInput
            value={this.props.authenticationReducer.email}
            style={{ fontSize: 20, height: 45, color: '#fff' }}
            placeholder="E-mail"
            placeholderTextColor='#FFF'
            onChangeText={text => this.props.modificationEmail(text)}
          />
          <TextInput
            secureTextEntry
            value={this.props.authenticationReducer.password}
            style={{ fontSize: 20, height: 45, color: '#fff' }}
            placeholder="Password"
            placeholderTextColor='#FFF'
            onChangeText={text => this.props.modificationPassword(text)}
          />
          <Text
            style={{ color: '#ff0000', fontSize: 18 }}
          >
            {this.props.authenticationReducer.errorRegisteredMessage}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
            <Button title="Signup" color="#115E54" onPress={() => this._registerUser()} />
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
