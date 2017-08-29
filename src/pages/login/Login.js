
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as fetchData from '../../actions/fetchData';
import { modificationEmail, modificationPassword } from '../../actions/AuthenticationActions';
import Render from './LoginRender';
import Base from './LoginBase';

class Login extends Base {
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
  return bindActionCreators({ modificationEmail, modificationPassword }, dispatch);

  // return {
  //   fetchData: () => dispatch(fetchData())
  // };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
