import React from 'react';
import './CommentSection.css';
import pt from 'prop-types';
import uuid from 'uuid';
import MomentComponent from '../MomentComponent/MomentComponent';
import NewCommentSection from '../NewCommentSection/NewCommentSection';

function CommentSection(props) {
  return(
    <>
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
      <div>
        <MomentComponent />
        <NewCommentSection />
      </div>  
    </>
  );
}

CommentSection.propTypes = {
    comments: pt.arrayOf(pt.shape({
        username: pt.string.isRequired,
        text: pt.string.isRequired
    }).isRequired)
}

export default CommentSection;