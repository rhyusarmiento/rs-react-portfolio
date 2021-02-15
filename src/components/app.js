import React, { Component } from "react";
import moment from "moment";

import PortfolioContainer from "./portfolio/portfolio-container";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h2>React Redux Router</h2>
        <h1>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h1>
        <PortfolioContainer/>
      </div>
    );
  }
}