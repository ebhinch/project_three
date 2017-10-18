import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'
import SignUpForm from "./SignUpForm.js"
import PageBody from "../styled-components/PageBody"
import styled from 'styled-components';

class UserPage extends Component {
    // This sets the initial state for the component. 
    state = {
        users: []
    }

    // Call the getAllUsers method as soon as the component is created
    componentWillMount() {
        this.getAllUsers()
    }

    // Use axios to get all users
    // async/await is being used here instead of promises
    getAllUsers = async () => {
        try {
            const response = await axios.get("/api/users")
            this.setState({ users: response.data })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <PageBody>
            <div>

                <h3>To best personalize your trip to Charlottesville's Monticello Wine Trail, either create an account or log into an existing one below.</h3>
                <h4>Existing Accounts:</h4>
                <h4>Please click through to edit or delete an existing account</h4>

                {this.state.users.map(user => {
                    return (<div><Link key={user._id} to={`/users/${user._id}`}>{user.userName}</Link></div>)
                })}

                <h4>Don't already have an account? Create one below:</h4>
                <SignUpForm />
            </div>
            </PageBody>
        );
    }
}

export default UserPage;

