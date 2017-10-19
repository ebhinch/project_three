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
import veritas from "./veritas.jpeg"

const UserColumnContainer = FlexRow.extend`
    align-items: space-around;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 400px;
    width: 80%;
    margin-left: 10%;
    margin-bottom: 55px;
`
const UserColumn = ShadowDiv.extend`
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 20px;
    min-height: 100%
`

const ColumnText = styled.div`
    margin-bottom: 10px;
    margin-top: 10px;
`

const UserImage = styled.div`
    width: 100%;
`

class UserPage extends Component {
    state = {
        users: []
    }

    componentWillMount() {
        this.getAllUsers()
    }

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
                    <UserImage>
                        <img src={veritas} alt="picture" />
                    </UserImage>

                    <DetailHeader>Charlottesvino's Registered User Accounts</DetailHeader>

                    <div>To get the most out of Charlottesvino's resources and take advantage of features like our note log, either create an account or log into an existing one.</div>
                    <UserColumnContainer>

                        <UserColumn>
                            <ColumnText>Existing Charlottesvino accounts include:</ColumnText>

                            {this.state.users.map(user => {
                                return (<ColumnText><Link key={user._id} to={`/users/${user._id}`}>{user.userName}</Link></ColumnText>)
                            })}

                        </UserColumn>
                        <br /> <br />
                        <UserColumn>
                            <ColumnText>Don't already have an account? Create one below:</ColumnText>
                            <SignUpForm />

                        </UserColumn>

                    </UserColumnContainer>
                </PageParagraphText>
            </PageBody>
        );
    }
}

export default UserPage;

