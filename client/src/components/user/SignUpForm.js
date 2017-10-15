import React, { Component } from 'react'
import axios from 'axios'

class SignUpForm extends Component {
    state = {
        newUser: {
            userName: "",
            name: "",
            hometown: "",
            season: ""
        }
    }

    render() {

        return (
            <div>
                <h1>Create Account</h1>
                <form>
                    <div>
                        <label>User Name: </label>
                        <input
                            name="userName"
                            type="text"
                            value={this.state.newUser.userName}
                        />
                    </div>

                    <div>
                        <label>Name: </label>
                        <input
                            name="name"
                            type="text"
                            value={this.state.name}
                        />
                    </div>

                    <div>
                        <label>Hometown: </label>
                        <input
                            name="hometown"
                            type="text"
                            value={this.state.hometown}
                        />
                    </div>

                    <div>
                        <label>Season Visiting: </label>
                        <input
                            name="season"
                            type="text"
                            value={this.state.season}
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
