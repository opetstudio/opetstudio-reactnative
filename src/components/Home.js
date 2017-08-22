'use strict';

import { Component } from 'react';
import Render from './HomeRender';

export default class Home extends Component {
  render() {
    return Render.call(this, this.props, this.state);
  }
}
