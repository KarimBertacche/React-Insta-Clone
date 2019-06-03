import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      instaData: dummyData,
    }
  }


  render() {
    return (
      <div className="App">
        hello world
  
        {/* <SearchBar />
        <PostContainer />
        <CommentSection /> */}
      </div>
    );
  } 
}

//<i className="fab fa-instagram"></i>

// function SearchBar(props) {
//   return();
// }

// function PostContainer(props) {
//   return();
// }

// function CommentSection(props) {
//   return();
// }
export default App;
