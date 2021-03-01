import axios from 'axios'
import React, { Component } from 'react'

export default class BlogDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentId: this.props.match.params.slug,
            blogItem: {}
        }
    }

    getBlogItem() {
        axios
            .get(`https://rs.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`)
            .then(res => {
                console.log("res", res);
            })
            .catch(err => {
                console.log("err", err);
            })
        }

    componentDidMount() {
        this.getBlogItem()
    }

    render() {
        return (
            <div>
                Blog detail
            </div>
        )
    }
}