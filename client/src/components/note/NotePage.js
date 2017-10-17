import React, { Component } from 'react';
import axios from "axios"


class NotePage extends Component {
    state = {
        user: {
            name: "",
            notes: []
        }
    }

    componentWillMount() {
        this.getAllNotes()
    }

    getAllNotes = async () => {
        try {
            const userId = this.props.match.params.userId
            const response = await axios.get(`/api/users/${userId}`)
            const noteList = response.data.notes
            this.setState({ user: response.data })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.user.name}'s Notes</h1>
                {this.state.user.notes.map(note => {
                    console.log(note)
                    return (<div>{note.title} {note.text}</div>)
                })}

                {/* <NoteList notes={this.state.user.notes} /> */}
            </div>
        )
    }
}

export default NotePage;