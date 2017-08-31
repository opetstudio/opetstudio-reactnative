'use strict';
import { Actions } from 'react-native-router-flux';
import { Component } from 'react';
import { ListView } from 'react-native';

export default class ChatBase extends Component {
  setDataSource(chats) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      this.setState({
        dataSource: ds.cloneWithRows(chats)
      });
  }
  _gotoLoginPage() {
    Actions.login();
  }
}
