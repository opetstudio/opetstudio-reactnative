
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Render from './TabBarMenuRender';
import * as AppActions from '../../actions/AppActions';

class TabBarMenu extends Component {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {
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
)(TabBarMenu);
