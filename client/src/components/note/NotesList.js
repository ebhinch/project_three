import React from 'react'
import styled from 'styled-components'
import Note from './Note'




const NotesList = (props) => {
    return (
        <div>
            {props.notes.map((note) => {
                return (
                    
          
                    <Note key={note._id}
                        _id={note._id}
                        title={note.title}
                        text={note.text}
                        handleChange={props.handleChange}
                        updateNote={props.updateNote}
                        deleteNote={props.deleteNote}
                    />
             
                )
            })}
        </div>
    )
}

export default NotesList
