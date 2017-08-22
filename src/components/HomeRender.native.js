'use strict';

import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
  Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// import Screen from './Screen';

// const logo = require('../img/rayasem-logo-color.png');

var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function () {
  return (
    <View style={styles.container}>
        <View style={[styles.box, styles.box1]}></View>
        <View style={[styles.box, styles.box2]}></View>
        <View style={[styles.box, styles.box3]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#61BD8C'
  }
});
