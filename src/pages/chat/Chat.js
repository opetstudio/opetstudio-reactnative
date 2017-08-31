import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import Render from './ChatRender';
import Base from './ChatBase';

import * as AppActions from '../../actions/AppActions';

class Chat extends Base {
  componentWillMount() {
    console.log('Chat.componentWillMount invoked');
    const { contactEmail } = this.props;
    this.props.userChatsFetch(contactEmail);
    this.setDataSource(this.props.chats);
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps==>', nextProps.chats);
    if (this.props.contactEmail !== nextProps.contactEmail) {
        this.props.userChatsFetch(nextProps.contactEmail);
    }
    this.setDataSource(nextProps.chats);
  }
  _sendMessage() {
    console.log('=>this.props=', this.props);
    const message = this.props.appReducer.message;
    const { contactName, contactEmail } = this.props;
    this.props.sendMessage(message, contactName, contactEmail);
  }
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  const chats = _.map(state.listChattingReducer, (val, uid) => {
    console.log('val ===> ', val);
    return { ...val, uid };
  });
  console.log('chatsssss=>', chats);
  return {
    chats,
    appReducer: state.appReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch);

  // return {
  //   fetchData: () => dispatch(fetchData())
  // };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
