import React, { Component } from "react";
import axios from 'axios'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            errorText: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        })
    }

    handleSubmit(event) {
        axios.post("https://api.devcamp.space/sessions",
        {
            client: {
                email: this.state.email,
                password: this.state.password
            }
        },
        { withCredentials: true }
        ).then((response) => {
            if (response.data.status == 'created') {
                console.log("enter");
            } else {
                this.setState({
                    errorText: "Wrong"
                })
            }
        }).catch((error) => {
            this.setState({
                errorText: "An error occurred"
            })
        })

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div>{this.state.errorText}</div>
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