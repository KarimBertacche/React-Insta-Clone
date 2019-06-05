import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import pt from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';

function PostContainer(props) {
    return(
        <div className="post-wrapper">
            <div className="header-wrapper">
                <figure className="thumbImg-wrapper">
                    <img className="thumbnail-img" src={props.data.thumbnailUrl} alt="thumbnail"/>
                </figure>
                <h2 className="post-user">{props.data.username}</h2>
            </div>
            <figure className="post-image">
                <img src={props.data.imageUrl} alt="post-img" />
            </figure>
            <div className="comment-wrapper">
                <div className="comment-icons">
                    <FontAwesomeIcon className="comment-logo" onClick={() => props.likePostHandler(props.id, props.postLikes)} icon={faHeart} />
                    <FontAwesomeIcon className="comment-logo" icon={faComment} />
                </div>
                <p className="tot-likes">{props.postLikes} likes</p>
                <CommentSection 
                    comments={props.data.comments}  
                    data={props.data}/>           
            </div>
        </div>
    );
}

PostContainer.propTypes = {
    dummyData: pt.arrayOf(pt.shape({
        username: pt.string.isRequired,
        thumbnailUrl: pt.string.isRequired,
        imageUrl: pt.string.isRequired,
        likes: pt.number.isRequired,
        timestamp: pt.string.isRequired,
        comments: pt.arrayOf(pt.shape({
            username: pt.string.isRequired,
            text: pt.string.isRequired,
        }).isRequired).isRequired
    }).isRequired)
}

export default PostContainer;


