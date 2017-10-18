import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'
import SignUpForm from "./SignUpForm.js"
import PageBody from "../styled-components/PageBody"
import PageParagraphText from "../styled-components/PageParagraphText"
import DetailHeader from "../styled-components/DetailHeader";
import { FlexColumn } from "../styled-components/FlexContainers";
import { FlexRow } from "../styled-components/FlexContainers";
import ShadowDiv from "../styled-components/ShadowDiv"
import styled from 'styled-components';

const UserColumnContainer = FlexRow.extend`
    align-items: space-between;
    flex-wrap: wrap;
    justify-content: space-evenly;
    height: 400px;
`

const UserColumn = ShadowDiv.extend`
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 20px;
    padding-right: 10px;
    padding-left: 10px;
    min-height: 100%
`


// const UserColumn = FlexColumn.extend`
//     align-items: center;
//     flex-wrap: wrap;
//     justify-content: flex-start;
//     margin-top: 20px;
//     padding-right: 10px;
//     padding-left: 10px;
//     min-height: 100%
// `

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
                <PageParagraphText>
                    <DetailHeader>Charlottesvino's Registered User Accounts</DetailHeader>

                    <div>To get the most out of Charlottesvino's resources and take advantage of features like our note log, either create an account or log into an existing one.</div>
                    <UserColumnContainer>
                        <UserColumn>
                            <div>Existing Charlottesvino accounts include:</div>

                            {this.state.users.map(user => {
                                return (<div><Link key={user._id} to={`/users/${user._id}`}>{user.userName}</Link></div>)
                            })}
                      
                        </UserColumn> 
                        <br /> <br />
                        <UserColumn>
                            <div>Don't already have an account? Create one below:</div>
                            <SignUpForm />
                       
                        </UserColumn>
                    </UserColumnContainer>
                </PageParagraphText>
            </PageBody>
        );
    }
}

export default UserPage;

