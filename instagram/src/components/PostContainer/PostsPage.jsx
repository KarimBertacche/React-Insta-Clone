import React from 'react';
import './PostContainer.css';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import uuid from 'uuid';

const PostsPage = props => {
    return (
        <div className="App">
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
                        postLikes={props.postLikes[idx]}
                        likePostHandler={props.likePostHandler}/>
            })        
        }
        </div>
    );

}

export default PostsPage;