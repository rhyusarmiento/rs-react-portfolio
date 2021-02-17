import React, { Component } from "react";
import moment from "moment";

import PortfolioContainer from "./portfolio/portfolio-container";
import Naviagtion from './navigation/navigation-container'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Naviagtion />
        <h2>React Redux Router</h2>
        <h1>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h1>
        <PortfolioContainer/>
      </div>
    );
  }
}