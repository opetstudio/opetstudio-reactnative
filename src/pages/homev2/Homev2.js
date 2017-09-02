import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authenticationAction from '../../actions/AuthenticationActions';
import Render from './Homev2Render';
import Base from './Homev2Base';

class Homev2 extends Base {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Chats' },
      { key: '2', title: 'Contacts' },
    ],
  };
  componentWillMount() {
    this._componentWillMount();
  }

  _handleIndexChange = index => this.setState({ index });
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {
    authenticationReducer: state.authenticationReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(authenticationAction, dispatch);

  // return {
  //   fetchData: () => dispatch(fetchData())
  // };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homev2);
