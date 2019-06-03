import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import uuid from 'uuid';


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
                      key={uuid()} 
                      data={dataObj}
                      value={this.state.newComment}
                      changes={this.inputChangeHandler}/>
          })        
        }
      </div>
    );
  } 
}

export default App;