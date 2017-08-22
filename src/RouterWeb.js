import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';


class RouterWeb extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
     </HashRouter>
    );
  }
}

export default RouterWeb;
