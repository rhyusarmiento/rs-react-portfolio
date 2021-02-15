import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        console.log('hi')
    }

    render() {
        return (
            <div>
                <button>Click me jajaja</button>
                <PortfolioItem />
            </div>
        )
    }
}