import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'
import SignUpForm from "./SignUpForm.js"

class UserPage extends Component {
    render() {
        return (
            <div>
                <h1>Hello from UserPage</h1>

                <h3>To best personalize your trip to Charlottesville's Monticello Wine Trail, either create an account or log into an existing one below.</h3>
                <h4>Existing Accounts:</h4>
                <h4>Please click through to edit or delete an existing account</h4>
                <h4>Don't already have an account? Create one below:</h4>
                <SignUpForm />
            </div>
        );
    }
}

export default UserPage;