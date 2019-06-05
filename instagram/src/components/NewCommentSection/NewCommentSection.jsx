import React from 'react';
import './NewCommentSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

function NewCommentSection(props) {
    return(
        <div className="newComment-section">
            <input 
                type="text" 
                value={props.value}
                onChange={props.changed} 
                placeholder="Add a comment ..."
                onKeyPress={props.keyPress}/> 
            <button
                className="post-comment"
                onClick={props.clicked}
            ><FontAwesomeIcon icon={faEllipsisH} /></button>
        </div>
    );
}

export default NewCommentSection;