import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();
    this.state = {
        pageTitle: "Welcome to my Portfolio",
        data: [
            {title: "Quip"},
            {title: "Eventbrite"}, 
            {title: "Ministry Safe"}, 
            {title: "SwingAway"}
        ]
    }

    this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this)
  }

  handlePageTitleUpdate() {
    this.setState({
        pageTitle: "Something else"
    })
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} url={"google.com"} />;
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        {this.portfolioItems()}
        
        <hr/>

        <button onClick={this.handlePageTitleUpdate}>Change Content</button>
      </div>
    );
  }
}