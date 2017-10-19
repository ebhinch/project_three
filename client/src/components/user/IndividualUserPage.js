import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import EditForm from "./EditForm.js"
import PageBody from "../styled-components/PageBody"
import PageParagraphText from "../styled-components/PageParagraphText"
import DetailHeader from "../styled-components/DetailHeader";
import { FlexColumn } from "../styled-components/FlexContainers";
import ShadowDiv from "../styled-components/ShadowDiv"
import styled from 'styled-components';
import image from "./userpic.jpg"

const ImageDiv = styled.div`
    img {
        width: 100%;
    }
`

const PageLink = PageParagraphText.extend`
a:hover {
    font-weight: 900;
    color: rgb(157, 15, 82);
}
`

const AccountSection = FlexColumn.extend`
color: #0f5e75;
align-items: center;
text-align: center;
img {
    width: 100%
}
`

const AccountDiv = ShadowDiv.extend`
    padding-right: 10px;
    padding-left: 10px;

`

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
                    <ImageDiv><img src={image} /></ImageDiv>
                    <div>
                        <DetailHeader>{this.state.user.name}, Welcome to Your Account Page</DetailHeader>

                        <p>
                            <button onClick={this.toggleShowNotes}> View Your Note Board</button>
                            <br />
                            <button onClick={this.deleteUser}>Delete Account (please note that upon click, this account will be deleted)</button>

                        </p>

                        <PageLink>
                            <Link to="/users">Return to the User Directory</Link>
                        </PageLink>

                        {this.state.editUserDetails ? <div>
                            <EditForm user={this.state.user} updateUser={this.updateUser} userId={this.props.match.params.userId} showUser={this.showUser} toggleEdit={this.toggleEdit} />


                        </div> : <div>
                                    <AccountSection><AccountDiv>
                                <h3>Name: {this.state.user.name}</h3>
                                <h3>Username: {this.state.user.userName} </h3>
                                <h3>Season Visiting: {this.state.user.season}</h3>
                                <h3>Hometown: {this.state.user.hometown}</h3>
                                </AccountDiv></AccountSection>
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

