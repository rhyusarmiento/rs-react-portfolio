import axios from 'axios'
import React, { Component } from 'react'
import ReactHtmlParser from "react-html-parser"
import BlogFeaturedImage from "../blog/blog-featured-image";

export default class BlogDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentId: this.props.match.params.slug,
            blogItem: {}
        }

        this.getBlogItem = this.getBlogItem.bind(this)
    }

    getBlogItem() {
        axios
            .get(`https://rs.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`)
            .then(response => {
                this.setState({
                    blogItem: response.data.portfolio_blog
                })
            })
            .catch(err => {
                console.log("err", err);
            })
        }

    componentDidMount() {
        this.getBlogItem()
    }

    render() {
        const {
            title,
            content,
            featured_image_url,
            blog_status
        } = this.state.blogItem

        return (
            <div className="blog-container">
                <div className="content-container">
                    <BlogFeaturedImage img={featured_image_url} />
                    <div className="content">{ReactHtmlParser(content)}</div>
                </div>
            </div>
        )
    }
}