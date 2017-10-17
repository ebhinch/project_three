import React from 'react'
import styled from 'styled-components'
import Note from './Note'


const NotesList = (props) => {
  return (
    <div>
      {props.notes.map((note) => {
        return (
          <Note key={note._id} _id={note._id}
            title={note.title} text={note.text} />
        )
      })}
    </div>
  )
}

export default NotesList
