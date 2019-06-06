import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const StyledCommentsIcons = styled.div`
    .comment-icons {
        display: flex; 
    }

    .comment-logo {
        text-align: left;
        font-size: 2.7rem;
        margin-right: 20px;
        cursor: pointer;
    }

    .comment-logo:last-child {
        transform: rotateY(180deg);
    }
    
    .tot-likes {
        text-align: left;
        font-size: 1.5rem;
        font-weight: bold;
    }  
`;

function CommentsIcons(props) {
    return(
        <StyledCommentsIcons>
            <div className="comment-icons">
            {/* () => props.likePostHandler(props.id, props.postLikes) */}
                <FontAwesomeIcon className="comment-logo" onClick={props.likePostHandler} icon={faHeart} />
                <FontAwesomeIcon className="comment-logo" icon={faComment} />
            </div>
            <p className="tot-likes">{props.postLikes} likes</p>
        </StyledCommentsIcons>
    );
}

export default CommentsIcons;