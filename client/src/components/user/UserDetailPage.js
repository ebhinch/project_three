import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import UserPage from "./UserPage";

class UserDetailPage extends Component {
    state={
        user: {
          userName: "",
          name: "",
          hometown: "",
          season: ""
        }
      }
    render() {
        return (
            <div>
                <h1>Hello from UserDetailPage</h1>
                <h2>Account Details:</h2>
                <h3>Name: </h3>
                <h3>Username: </h3>
                <h3>Season Visiting: {this.state.user.season}</h3>
                <h3>Hometown: </h3>
                <br /> <br />
                <h4>Edit Account Details</h4>
                <p><Link to="">Edit Account Details</Link></p>
                <p><Link to="">Delete Account (please note that upon click, this account will be deleted)</Link></p>
                <p><Link to="/users">Not your account? Return to the User Directory</Link></p>
                </div>
        );
    }
}

export default UserDetailPage;
