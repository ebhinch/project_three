import React from 'react'


const Note = (props) => {
    const deleteNote = () => {
        props.deleteNote(props._id)
    }

    const handleChange = (event) => {
        props.handleChange(event, props._id)
    }

    const updateNote = () => {
        props.updateNote(props._id)
    }

    return (
        <div>
            <input onBlur={updateNote} onChange={handleChange} name="title" value={props.title} />
            <textarea onBlur={updateNote} onChange={handleChange} name="text" value={props.text} />
            <button onClick={deleteNote}>Delete Note</button>
        </div>
    )
}

export default Note
