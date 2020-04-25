import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import Home from 'containers/Home';
import About from 'containers/About';

class App extends Component {
  render(){
    let routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={Home} />
      </Switch>
    );

    return (
      <Router basename='/'>
        <div className="App">
          <div className="Site">
            <Header></Header>

            <main className="main">
              {routes}
            </main>

            <Footer></Footer>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
