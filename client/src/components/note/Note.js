import React from 'react';
import { FlexRow } from "../styled-components/FlexContainers";
import { FlexColumn } from "../styled-components/FlexContainers";

import ShadowDiv from "../styled-components/ShadowDiv"
import styled from 'styled-components';


const NoteContainer = FlexRow.extend`
align-items: space-around;
flex-wrap: wrap;
justify-content: space-around;
`

const NoteColumn = ShadowDiv.extend`
    align-items: space-around;
 
    height: 300px;
    width: 300px;
    margin: 20px;
    background-color: rgba(15, 94, 117, .5);
    font-family: 'Shadows Into Light', cursive;
    border-radius: 5px;
    
    input {
        font-weight: bold;
        font-size: 24px;
        font-family: 'Shadows Into Light', cursive;
    }

    input, textarea {
        color: #0f5e75;
        font-size: 20px;
        margin: 10px 0;
        border: none;
        background-color: initial;
        font-family: 'Shadows Into Light', cursive;
    }

    textarea{
        width: 95%;
        height: 70%;
        font-family: 'Shadows Into Light', cursive;   
    }
`


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
            <NoteContainer>
                <NoteColumn>

                    <input onBlur={updateNote} onChange={handleChange} name="title" value={props.title} />
                    <textarea onBlur={updateNote} onChange={handleChange} name="text" value={props.text} />

                </NoteColumn>
            </NoteContainer>
            <button onClick={deleteNote}>Delete Note</button>
            <br />
        </div>

    )
}

export default Note
