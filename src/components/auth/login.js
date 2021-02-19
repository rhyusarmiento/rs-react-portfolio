import React, { Component } from "react";

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        console.log("handle submit", event);
    }

    render() {
        return (
            <div>
                <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>
                <form onSubmit={this.handleSubmit} >
                    <input 
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Your password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />

                    <div>
                        <button type="Submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}