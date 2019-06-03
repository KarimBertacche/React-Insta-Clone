import React from 'react';
import './CommentSection.css';
import pt from 'prop-types';
import uuid from 'uuid';

function CommentSection(props) {
    return(
      <div className="comment-section">
        {
          props.comments.map(comment => {
            return(
                <p className="comment" 
                    key={uuid()}>
                      <span className="username"
                      >{comment.username} </span>
                    {comment.text}</p>
            )
          })
        } 
      </div>
    );
}

CommentSection.propTypes = {
    comments: pt.arrayOf(pt.shape({
        username: pt.string.isRequired,
        text: pt.string.isRequired
    }).isRequired)
}

export default CommentSection;