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
        hello world
        {
          this.state.instaData.map(dataObj => {
            return <PostContainer 
                      key={dataObj.id} 
                      data={dataObj}
                      value={this.state.newComment}
                      changes={this.inputChangeHandler}/>
          })        
        }
        {/* <SearchBar />
        
        <CommentSection /> */}
      </div>
    );
  } 
}

//<i className="fab fa-instagram"></i>

// function SearchBar(props) {
//   return();
// }

function PostContainer(props) {
  return(
    <div>
      {/* {
        props.data.map()
      } */}
      <CommentSection 
        comments={props.data.comments} 
        value={props.value}
        changes={props.changes}/>
    </div>
  );
}

function CommentSection(props) {
  return(
    <div>
      {
        props.comments.map(comment => {
          return(
              <p className="comment-section" 
                  key={comment.id}>
                    <span className="username"
                    >{comment.username}</span>
                  {comment.text}</p>
          )
        })
      }
      <input 
        type="text" 
        value={props.value}
        onChange={props.changes} 
        placeholder="Add a comment ..."/> 
    </div>
  );
}
export default App;
