import React, { Component } from "react";
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import PortfolioContainer from "./portfolio/portfolio-container";
import NaviagtionContainer from './navigation/navigation-container'
import Home from './pages/home'
import About from './pages/about'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <NaviagtionContainer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </Router>
        <h2>React Redux Router</h2>
        <h1>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h1>
        <PortfolioContainer/>
      </div>
    );
  }
}