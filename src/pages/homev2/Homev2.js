import Render from './Homev2Render';
import Base from './Homev2Base';

export default class Homev2 extends Base {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Chats' },
      { key: '2', title: 'Contacts' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });
  render() {
    return Render.call(this, this.props, this.state);
  }
}
