import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
// import UserPage from "./UserPage";
import { Redirect } from 'react-router-dom'


class UserDetailPage extends Component {
    state={
        user: {
            userName: "",
            name: "",
            hometown: "",
            season: ""
        },
        redirectToUserList: false
    }

      
    async componentWillMount () {
        const userId = this.props.match.params.userId
        const response = await axios.get(`/api/users/${userId}`)
        this.setState({user: response.data})
        console.log(response.data)
    }

    deleteUser = async() => {
        const userId = this.props.match.params.userId
        const response = await axios.delete(`/api/users/${userId}`)
        this.setState({user: response.data, redirectToUserList: true})
    }
    
    render() {
        if (this.state.redirectToUserList) {
            return <Redirect to={"/users"} />
        }

        return (
            <div>
                <h1>Hello from UserDetailPage</h1>
                <h2>Account Details:</h2>
                <h3>Name: {this.state.user.name}</h3>
                <h3>Username: {this.state.user.userName} </h3>
                <h3>Season Visiting: {this.state.user.season}</h3>
                <h3>Hometown:{this.state.user.hometown}</h3>
                <br /> <br />
                <h4>Edit Account Details</h4>
                <p><Link to="">Edit Account Details</Link></p>
                <p><button onClick = {this.deleteUser}>Delete Account (please note that upon click, this account will be deleted)</button></p>
                <p><Link to="/users">Not your account? Return to the User Directory</Link></p>
                </div>
        );
    }
}


export default UserDetailPage;


