import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import EditForm from "./EditForm.js"
import PageBody from "../styled-components/PageBody"
import PageParagraphText from "../styled-components/PageParagraphText"
import DetailHeader from "../styled-components/DetailHeader";
import { FlexColumn } from "../styled-components/FlexContainers";
import { FlexRow } from "../styled-components/FlexContainers";
import styled from 'styled-components';

class IndividualUserPage extends Component {
    state = {
        user: {
            userName: "",
            name: "",
            hometown: "",
            season: "",
            notes: []
        },
        redirectToUserList: false,
        editUserDetails: false,
        redirectToNotes: false
    }

    componentWillMount() {
        this.showUser()
    }

    showUser = async () => {
        const userId = this.props.match.params.userId
        const response = await axios.get(`/api/users/${userId}`)
        this.setState({ user: response.data })
        console.log(response.data)
    }

    deleteUser = async () => {
        const userId = this.props.match.params.userId
        const response = await axios.delete(`/api/users/${userId}`)
        this.setState({ user: response.data, redirectToUserList: true })
    }

    handleChange = (event, userId) => {
        const attribute = event.target.name
        const clonedUser = { ...this.state.user }
        clonedUser[attribute] = event.target.value
        console.log(clonedUser)
        this.setState({ user: clonedUser })
    }

    updateUser = async () => {
        const { userId } = this.props.match.params
        const clonedUser = { ...this.state.user }
        const response = await axios.patch(`/api/users/${userId}`, {
            user: clonedUser
        })
        this.setState({ user: response.data })
    }


    // showNotes = () => {
    //     const { userId } = this.props.match.params
    //     const response = axios.get(`/api/users/${userId}/notes`)
    //     this.toggleShowNotes;

    //     console.log(response)
    //     this.setState({ notes: response.data, redirectToNotes: true })
    // }


    toggleEdit = () => {
        this.setState({ editUserDetails: !this.state.editUserDetails })
    }

    toggleShowNotes = () => {
        this.setState({ redirectToNotes: true })
    }


    render() {
        if (this.state.redirectToUserList) {
            return <Redirect to={"/users"} />
        }
        else if (this.state.redirectToNotes) {
            return <Redirect to={`/users/${this.props.match.params.userId}/notes`} />
        }
        return (
            <PageBody>
                <PageParagraphText>
            <div>
                <DetailHeader>{this.state.user.name}'s Account Page</DetailHeader>

                <p>
                    <button onClick={this.toggleShowNotes}>{this.state.user.name}'s Notes</button>
                </p>

                <p>
                    <button onClick={this.deleteUser}>Delete Account (please note that upon click, this account will be deleted)</button>
                </p>

                <p>
                    <Link to="/users">Return to the User Directory</Link>
                </p>

                {this.state.editUserDetails ? <div>
                    <EditForm user={this.state.user} updateUser={this.updateUser} userId={this.props.match.params.userId} showUser={this.showUser} toggleEdit={this.toggleEdit} />
                    <button onClick={this.toggleEdit}>Edit Account Details</button>

                </div> : <div>
                        <h3>Name: {this.state.user.name}</h3>
                        <h3>Username: {this.state.user.userName} </h3>
                        <h3>Season Visiting: {this.state.user.season}</h3>
                        <h3>Hometown: {this.state.user.hometown}</h3>
                        <button onClick={this.toggleEdit}>Edit Account Details</button>

                    </div>
                }
            </div>
            </PageParagraphText>
            </PageBody>
        )
    }
}



export default IndividualUserPage;

