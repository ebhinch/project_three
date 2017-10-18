import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import PageBody from "../styled-components/PageBody"
import DetailHeader from "../styled-components/DetailHeader"
import PageParagraphText from "../styled-components/PageParagraphText"
import styled from 'styled-components';

const ColumnText = styled.div`
margin-bottom: 15px;
margin-top: 15px;
`


class SignUpForm extends Component {
    state = {
        newUser: {
            userName: "",
            name: "",
            hometown: "",
            season: ""
        },
        redirectToAccount: false,
        newUserId: ""
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const updateUser = {...this.state.newUser}
        updateUser[attribute] = event.target.value
        this.setState({newUser: updateUser})
    }

    handleSubmit = async (event) => {
        //stop the form from reloading the page
        event.preventDefault()
        // console.log("submitting" + event)
        //create new user & post to API
        const response = await axios.post("/api/users", {
            "user": this.state.newUser
        })
        //trigger redirect once post is complete and successful 
        this.setState({redirectToAccount: true, newUserId: response.data._id})
    }


    render() {
        if (this.state.redirectToAccount) {
            return <Redirect to={`/users/${this.state.newUserId}`} />
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <ColumnText>
                        <label htmlFor="userName">User Name: </label>
                        <input
                            onChange={this.handleChange}
                            name="userName"
                            type="text"
                            value={this.state.newUser.userName}
                        />
                    </ColumnText>

                    <ColumnText>
                        <label htmlFor="name">Name: </label>
                        <input
                            onChange={this.handleChange}
                            name="name"
                            type="text"
                            value={this.state.newUser.name}
                        />
                    </ColumnText>

                    <ColumnText>
                        <label htmlFor="hometown">Hometown: </label>
                        <input
                            onChange={this.handleChange}
                            name="hometown"
                            type="text"
                            value={this.state.newUser.hometown}
                        />
                    </ColumnText>

                    <ColumnText>
                        <label htmlFor="season">Season Visiting: </label>
                        <input 
                            onChange={this.handleChange}
                            name="season"
                            type="text"
                            value={this.state.newUser.season}
                        />
                    </ColumnText>

                    <div>
                        <button>Create Account</button>
                    </div>

                </form>
             
            </div>

        )
    }
}

export default SignUpForm


