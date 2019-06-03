import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import pt from 'prop-types';

function PostContainer(props) {
    return(
        <div className="post-wrapper">
        <div className="header-wrapper">
            <figure className="thumbImg-wrapper">
            <img className="thumbnail-img" src={props.data.thumbnailUrl} alt="thumbnail"/>
            </figure>
            <h2 className="post-user">{props.data.username}</h2>
        </div>
        <div className="post-image">
            <figure>
            <img src={props.data.imageUrl} alt="post-img" />
            </figure>
        </div>
        <div className="comment-wrapper">
            <div className="comment-icons">

            </div>
            <p className="tot-likes">{props.data.likes} likes</p>
            <CommentSection 
            comments={props.data.comments} 
            value={props.value}
            changes={props.changes}/>     
        </div>
        <div className="newComment-section">
            <input 
            type="text" 
            value={props.value}
            onChange={props.changes} 
            placeholder="Add a comment ..."/> 
            <span></span>
        </div> 
        </div>
    );
}

PostContainer.propTypes = {
    dummyData: pt.arrayOf(pt.shape({
        id: pt.string.isRequired,
        username: pt.string.isRequired,
        thumbnailUrl: pt.string.isRequired,
        imageUrl: pt.string.isRequired,
        likes: pt.number.isRequired,
        timestamp: pt.string.isRequired,
        comments: pt.arrayOf(pt.shape({
            id: pt.string.isRequired,
            username: pt.string.isRequired,
            text: pt.string.isRequired,
        }).isRequired).isRequired
    }).isRequired).isRequired
}

export default PostContainer;