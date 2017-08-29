import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as fetchData from '../../actions/fetchData';
import {
  modificationEmail,
  modificationPassword,
  modificationName,
  registerUser,
  modificationErrorMessage
} from '../../actions/AuthenticationActions';
import Render from './SignupRender';
import Base from './SignupBase';

class Signup extends Base {
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
  return bindActionCreators({
    registerUser,
    modificationEmail,
    modificationPassword,
    modificationName,
    modificationErrorMessage
  }, dispatch);

  // return {
  //   fetchData: () => dispatch(fetchData())
  // };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
