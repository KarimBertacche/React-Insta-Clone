import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import uuid from 'uuid';
import styled from 'styled-components';

const StyledApp = styled.div`
  text-align: center;
`;

const PostsPage = props => {
    return (
        <StyledApp>
            <SearchBar 
                searchInput={props.inputSearch}
                searchValue={props.searchBarHandler}
                searchNow={props.searchNowHandler}
            />
            {
                props.instaData.map((dataObj, idx) => {
                return <PostContainer 
                            key={uuid()} 
                            id={props.postIds[idx]}
                            data={dataObj}
                            postIds={props.postIds}
                            postIdx={idx}
                            postLikes={props.postLikes[idx]}
                            likePostHandler={props.likePostHandler}
                            comment={props.allCommentsData[idx]}
                            allCommentsData={props.allCommentsData}
                        />
                })        
            }
        </StyledApp>
    );

}

export default PostsPage;