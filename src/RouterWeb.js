import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
// import { ConnectedRouter } from 'react-router-redux';
import { configureStore } from './store/configureStore';

import Home from './pages/home/Home';
import About from './pages/about/About';
// import CounterPage from './pages/counter/Counter';
import MemberPage from './pages/member/Member';

const store = configureStore();
persistStore(store);

class RouterWeb extends Component {
  render() {
    return (
      <Provider store={store}>
          <HashRouter>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/members" component={MemberPage} />
            </div>
         </HashRouter>
     </Provider>
    );
  }
}

export default RouterWeb;
