

'use strict';

import React from 'react';
import {
  // StyleSheet,
  Image
} from 'react-native';

// import Screen from './Screen';

// const logo = require('../img/rayasem-logo-color.png');


// const { height, width } = Dimensions.get('window');

// const box_count = 3;

// const box_height = (height / box_count) - 70;
// const box_width = width - 50;
const bg = require('../../img/bg3.jpg');

export default function () {
  console.log('cek state: ', this.state);
  return (
    <Image style={{ flex: 1, width: null }} source={bg}>{this._renderLogin()}</Image>
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
