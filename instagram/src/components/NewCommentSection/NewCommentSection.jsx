import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StylesNewComments = styled.div` 
    display: flex;
    margin-top: 0;
    padding: 0;
    height: 50px;
    
    input {
        display: flex;
        width: 100%;
        height: 100%;
        border: none;
        outline: 0;
        font-size: 1.8rem;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        font-size: 2rem;
        border: none;
        cursor: pointer;
        outline: 0;
    }
`;

function NewCommentSection(props) {
    return(
        <StylesNewComments>
            <input 
                type="text" 
                value={props.value}
                onChange={props.changed} 
                placeholder="Add a comment ..."
                onKeyPress={props.keyPress}/> 
            <button
                onClick={props.clicked}
            ><FontAwesomeIcon icon={faEllipsisH} /></button>
        </StylesNewComments>
    );
}

export default NewCommentSection;