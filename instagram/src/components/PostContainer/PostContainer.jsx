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
            <figure className="post-image">
                <img src={props.data.imageUrl} alt="post-img" />
            </figure>
            <div className="comment-wrapper">
                <CommentSection 
                    comments={props.data.comments}  
                    data={props.data}
                    id={props.id}
                    postIds={props.postIds}
                    likes={props.postLikes}
                    likePostHandler={props.likePostHandler}/>           
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


