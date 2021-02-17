import React, { Component } from "react";
import moment from "moment";
import axios from 'axios';
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
import NoMatch from './pages/no-match'

export default class App extends Component {
  constructor() {
    super();

    this.getPortfolioItems = this.getPortfolioItems.bind(this)
  }

  getPortfolioItems() {
    axios.get("https://rs.devcamp.space/portfolio/portfolio_items")
    .then((response) => {
      console.log("response", response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    this.getPortfolioItems()
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
              <Route 
                exact
                path="/portfolio/:slug" 
                component={PortfolioDetail} 
              />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}