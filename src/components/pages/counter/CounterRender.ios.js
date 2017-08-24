'use strict';

import Render from './CounterRender.native';

export default function () {
  return Render.call(this, this.props, this.state);
}
