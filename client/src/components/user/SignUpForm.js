import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class SignUpForm extends Component {
    state = {
        newUser: {
            userName: "",
            name: "",
            hometown: "",
            season: ""
        },
        redirectToAccount: false,
        newUserId: ""
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const updateUser = {...this.state.newUser}
        updateUser[attribute] = event.target.value
        this.setState({newUser: updateUser})
    }

    handleSubmit = async (event) => {
        //stop the form from reloading the page
        event.preventDefault()
        //create new user & post to API
        const response = await axios.post("/api/users", {
            "user": this.state.newUser
        })
        //trigger redirect once post is complete and successful 
        this.setState({redirectToAccount: true, newUserId: response.data._id})
    }


    render() {
        if (this.state.redirectToAccount) {
            return <Redirect to={`/users/${this.state.newUserId}`} />
        }

        return (
            <div>
                <h1>Create Account</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="userName">User Name: </label>
                        <input
                            onChange={this.handleChange}
                            name="userName"
                            type="text"
                            value={this.state.newUser.userName}
                        />
                    </div>

                    <div>
                        <label htmlFor="name">Name: </label>
                        <input
                            onChange={this.handleChange}
                            name="name"
                            type="text"
                            value={this.state.newUser.name}
                        />
                    </div>

                    <div>
                        <label htmlFor="hometown">Hometown: </label>
                        <input
                            onChange={this.handleChange}
                            name="hometown"
                            type="text"
                            value={this.state.newUser.hometown}
                        />
                    </div>

                    <div>
                        <label htmlFor="season">Season Visiting: </label>
                        <input 
                            onChange={this.handleChange}
                            name="season"
                            type="text"
                            value={this.state.newUser.season}
                        />
                    </div>

                    <div>
                        <button>Create Account</button>
                    </div>

                </form>
            </div>

        )
    }
}

export default SignUpForm


