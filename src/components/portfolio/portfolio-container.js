import React, { Component } from "react";
import axios from 'axios';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();
    this.state = {
        pageTitle: "Welcome to my Portfolio",
        isLoading: false,
        data: [
            {title: "Quip", category: "eCommerce", slug: 'quip'},
            {title: "Eventbrite", category: "Scheduleing", slug: 'eventbrite'}, 
            {title: "Ministry Safe", category: "Enterprise", slug: 'ministry-safe'}, 
            {title: "SwingAway", category: "eCommerce", slug: 'swingaway'}
        ]
    }

    this.getPortfolioItems = this.getPortfolioItems.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
  }

  
  handleFilter(filter) {
    this.setState((prevState) => ({
      data: prevState.data.filter((item) => {
        return item.category == filter
      })
    }))
    // this.setState({
    //   data: this.state.data.filter((item) => {
    //     return item.category == filter
    //   })
    // })
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

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} url={"google.com"} slug={item.slug}/>;
    });
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }
    this.getPortfolioItems()
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
        <button onClick={() => this.handleFilter('Scheduleing')}>Scheduleing</button>
        <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>

        {this.portfolioItems()}
      </div>
    );
  }
}