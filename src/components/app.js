import React, { Component } from "react";
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import NaviagtionContainer from './navigation/navigation-container'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Blog from './pages/blog'
import PortfolioDetail from './portfolio/portfolio-detail'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <h2>Rhyu Bottega React-Router</h2>
            <h4>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h4>
            <NaviagtionContainer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route path="/portfolio/:slug" component={PortfolioDetail} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}