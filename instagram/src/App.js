import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      instaData: dummyData,
      newComment: '',
    }
  }

  inputChangeHandler = event => {
    this.setState({
      newComment: event.target.value,
    })
  } 


  render() {
    return (
      <div className="App">
        <SearchBar />
        {
          this.state.instaData.map(dataObj => {
            return <PostContainer 
                      key={dataObj.id} 
                      data={dataObj}
                      value={this.state.newComment}
                      changes={this.inputChangeHandler}/>
          })        
        }
      </div>
    );
  } 
}

//

function SearchBar(props) {
  return(
    <header>
      <div className="logo-wrapper">    
        {/* <i className="fab fa-instagram"></i> */}
        <h3>Instagram</h3>
      </div>
      <div className="search-wrapper">
        <input 
          className="search-bar"
          type="text"
          value={props.searchValue}
          placeholder="Search"/>
      </div> 
      <div className="nav-icons">

      </div>
    </header>

  );
}

function PostContainer(props) {
  return(
    <div className="post-wrapper">
      <div className="header-wrapper">
        <figure className="thumbImg-wrapper">
          <img className="thumbnail-img" src={props.data.thumbnailUrl} alt="thumbnail image"/>
        </figure>
        <h2 className="post-user">{props.data.username}</h2>
      </div>
      <div className="post-image">
        <figure>
          <img src={props.data.imageUrl} alt="post image" />
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

function CommentSection(props) {
  return(
    <div className="comment-section">
      {
        props.comments.map(comment => {
          return(
              <p className="comment" 
                  key={comment.id}>
                    <span className="username"
                    >{comment.username} </span>
                  {comment.text}</p>
          )
        })
      } 
    </div>
  );
}
export default App;
