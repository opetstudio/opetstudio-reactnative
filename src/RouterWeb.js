import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
// import { ConnectedRouter } from 'react-router-redux';
import { configureStore } from './store/configureStore';

import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import CounterPage from './components/pages/counter/Counter';

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
              <Route path="/counter" component={CounterPage} />
            </div>
         </HashRouter>
     </Provider>
    );
  }
}

export default RouterWeb;
