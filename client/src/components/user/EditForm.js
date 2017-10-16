import React, { Component } from 'react';
import axios from 'axios'

class EditForm extends Component {
    state = {
        updatedUser: {
            userName: "",
            name: "",
            hometown: "",
            season: ""
        },
        redirectToAccount: false,
        newUserId: ""
    }

    componentWillMount() {
        this.setState({ updatedUser: this.props.user })
    }

    handleChange = (event, userId) => {
        const attribute = event.target.name
        const clonedUser = { ...this.state.updatedUser }
        clonedUser[attribute] = event.target.value
        console.log(clonedUser)
        this.setState({ updatedUser: clonedUser })
    }

    //use await to run method passed through props
    handleSubmit = async (event) => {
        event.preventDefault()
        const { userId } = this.props
        const clonedUser = { ...this.state.updatedUser }
        const response = await axios.patch(`/api/users/${userId}`, {
            user: clonedUser
        })
        await this.props.showUser()
        this.props.toggleEdit()
        console.log(response)
        this.setState({ user: response.data})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="userName">Username: </label>
                        <input onChange={this.handleChange}
                            name="userName"
                            type="text"
                            value={this.state.updatedUser.userName}
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input onChange={this.handleChange}
                            name="name"
                            type="text"
                            value={this.state.updatedUser.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="hometown">Hometown: </label>
                        <input onChange={this.handleChange}
                            name="hometown"
                            type="text"
                            value={this.state.updatedUser.hometown}
                        />
                    </div>
                    <div>
                        <label htmlFor="season">Season Visiting: </label>
                        <input onChange={this.handleChange}
                            name="season"
                            type="text"
                            value={this.state.updatedUser.season}
                        />
                    </div>
                    <input type="submit" value="Save Account Updates" />
                </form>
            </div>
        );
    }
}

export default EditForm;