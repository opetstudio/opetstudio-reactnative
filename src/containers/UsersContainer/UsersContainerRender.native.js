import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
// import PropTypes from 'prop-types';
// import { fetchData } from '../../../actions/fetchData';
import UsersList from '../../components/UsersList/UsersList';

export default function () {
    return (
      <View>
        <Text>Members Page Desktop/Web</Text>
        <TouchableHighlight style={styles.button} onPress={() => { this._onPressButton(); }}>
          <Text style={styles.buttonText}>Load Data</Text>
        </TouchableHighlight>
        <UsersList title="Users">
          {
            this.props.users.data.length ?
            (
              this.props.users.data.map(
                (person, i) => (
                  <View key={i} >
                    <Text>Name: {person.name}</Text>
                    <Text>Age: {person.age}</Text>
                  </View>
                )
              )
            ) : null
          }
        </UsersList>
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


// UsersContainerRender.propTypes = {
//   users: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     age: PropTypes.number.isRequired
//   })).isRequired
// };

// export default UsersContainerRender;
