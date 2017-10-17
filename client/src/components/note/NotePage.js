import React, { Component } from 'react';
import axios from "axios"
import NotesList from "./NotesList"


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

    createNewNote = async () => {
        try {
            const { userId } = this.props.match.params
            const response = await axios.post(`/api/users/${userId}/notes`)
            console.log(response.data)
            this.setState({ user: response.data })
        } catch (error) {
            console.log(error)
        }
    }

    deleteNote = async (noteId) => {
        try {
            const { userId } = this.props.match.params
            const id = noteId
            const response = await axios.delete(`/api/users/${userId}/notes/${id}`)
            this.setState({ user: response.data })
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (event, noteId) => {
        try {
            const attribute = event.target.name
            const clonedUser = { ...this.state.user }
            const note = clonedUser.notes.find(i => i._id === noteId)
            note[attribute] = event.target.value
            this.setState({ user: clonedUser })
        } catch (error) {
            console.log(error)
        }
    }

    updateNote = async (noteId) => {
        try {
            const { userId } = this.props.match.params
            const id = noteId
            const clonedUser = { ...this.state.user }
            const note = clonedUser.notes.find(i => i._id === noteId)
            const response = await axios.patch(`/api/users/${userId}/notes/${noteId}`, {
                note: note
            })
            this.setState({ user: response.data })
        } catch (error) {
            console.log(error)
    }
}

        render() {
            return (
                <div>
                    <h1>{this.state.user.name}'s Notes</h1>
                    <button onClick={this.createNewNote}>Write New Note</button>

                    <NotesList
                        notes={this.state.user.notes}
                        handleChange={this.handleChange}
                        deleteNote={this.deleteNote}
                        updateNote={this.updateNote}
                    />

                </div>
            )
        }
    }

    export default NotePage;