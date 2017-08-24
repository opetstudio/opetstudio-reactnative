'use strict';

import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

export default function () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Redux Examples</Text>
      <TouchableHighlight style={styles.button} onPress={() => { this._onPressButton(); }}>
        <Text style={styles.buttonText}>Load Data</Text>
      </TouchableHighlight>

      <View style={styles.mainContent}>
        {
          this.props.appData.isFetching && <Text>Loading</Text>
        }
        {
          this.props.appData.data.length ?
          (
            this.props.appData.data.map(
              (person, i) => (
                  <View key={i} >
                    <Text>Name: {person.name}</Text>
                    <Text>Age: {person.age}</Text>
                  </View>
              )
            )
          ) : null
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  },
  mainContent: {
    margin: 10,
  }
});
