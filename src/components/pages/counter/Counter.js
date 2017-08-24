'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { fetchData } from '../../../actions/fetchData';
import * as fetchData from '../../../actions/fetchData';

import Render from './CounterRender';
import Base from './CounterBase';

class Counter extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {
    appData: state.dataReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(fetchData, dispatch);
  // return {
  //   fetchData: () => dispatch(fetchData())
  // };
}

// @connect(
//   state => ({
//     image: state.image,
//   }),
//   dispatch => ({
//     actions: { ...bindActionCreators({ fetchImage, changeImage }, dispatch) }
//   }),
// )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
