
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as fetchData from '../../actions/fetchData';
import * as authenticationAction from '../../actions/AuthenticationActions';
import Render from './LoginRender';
import Base from './LoginBase';

class Login extends Base {
  componentWillMount() {
    this.props.resetAuthenticationReducer();
    this.props.isUserLogin();
  }
  render() {
    console.log('Login render');
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
)(Login);
