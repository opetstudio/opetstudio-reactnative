'use strict';

import Render from './ChattingContainerRender.native';

export default function () {
  return Render.call(this, this.props, this.state);
}
