import Render from './WelcomeRender';
import Base from './WelcomeBase';

export default class Welcome extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}
