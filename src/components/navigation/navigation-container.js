import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class NavigationComponent extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div className="nav-wrapper">
                <div className="left-side">
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Home
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                    <NavLink to="/contact">
                        Contact 
                    </NavLink>
                    <NavLink to="/blog">
                        Blog 
                    </NavLink>

                    {false ? <button>Add Blog</button> : null }
                </div>
                <div className="right-side">
                    RHYU SARMIENTO
                </div>
            </div>
        )
    }
}