import React from 'react'
import styled from 'styled-components'
import Note from './Note'
import { FlexRow } from "../styled-components/FlexContainers";


const NoteContainer = FlexRow.extend`
align-items: space-around;
flex-wrap: wrap;
justify-content: space-around;
`

const NotesList = (props) => {
    return (
        <div>
            {props.notes.map((note) => {
                return (
                    
                    <NoteContainer>
                    <Note key={note._id}
                        _id={note._id}
                        title={note.title}
                        text={note.text}
                        handleChange={props.handleChange}
                        updateNote={props.updateNote}
                        deleteNote={props.deleteNote}
                    />
                    </NoteContainer>
                )
            })}
        </div>
    )
}

export default NotesList
