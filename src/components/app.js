import React, { Component } from "react";
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
import Auth from './pages/auth'
import PortfolioDetail from './portfolio/portfolio-detail'
import NoMatch from './pages/no-match'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this)
    this.handleUnSuccessfulLogin = this.handleUnSuccessfulLogin.bind(this)
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }
  
  handleUnSuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NaviagtionContainer />
            <h2>{this.state.loggedInStatus}</h2>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route 
                path="/auth"
                render={(props) => (
                  <Auth
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnSuccessfulLogin={this.handleUnSuccessfulLogin}
                  />
                )}
              />
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