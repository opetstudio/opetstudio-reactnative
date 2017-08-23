'use strict';

import Render from './HomeRender';
import Base from './HomeBase';

export default class Home extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}
