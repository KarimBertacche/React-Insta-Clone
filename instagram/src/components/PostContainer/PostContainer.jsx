import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import pt from 'prop-types';
import styled from 'styled-components';

const StyledPostWrapper = styled.div`
    width: 600px;
    height: 875px;
    margin: 0 auto;
    border: 3px solid #515bd4;
    border-radius: 5px;
    margin-bottom: 30px;
    box-shadow: 1px 1px 10px #000;
    
    figure {
        width: 100%;
        height: 550px;
        border-bottom: 3px solid #515bd4;
        object-fit: cover;
        margin: 0;

        img {
            width: 100%;
            height: 100%;
        }
    }

    main {
        padding: 10px 20px 0;
    }
`;

function PostContainer(props) {
    return(
        <StyledPostWrapper>
                <div>
                    <PostHeader 
                        thumbnailUrl={props.data.thumbnailUrl}
                        username={props.data.username}
                    />
                    <figure>
                        <img src={props.data.imageUrl} alt="post-img" />
                    </figure>
                    <main>
                        <CommentSection
                            comments={props.comment}  
                            data={props.data}
                            id={props.id}
                            postIds={props.postIds}
                            likes={props.postLikes}
                            likePostHandler={props.likePostHandler}
                            postIdx={props.postIdx}
                            allCommentsData={props.allCommentsData}
                            />           
                    </main>
                </div>
        </StyledPostWrapper>
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


