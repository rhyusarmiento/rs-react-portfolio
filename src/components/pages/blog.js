import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Blog extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <h2>Blog</h2>
                <div>
                    <Link to="/about">Read more about myself</Link>
                </div>
            </div>
        )
    }
}