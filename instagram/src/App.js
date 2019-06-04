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
      inputSearch: '',
      newComment: '',
      postedComments: dummyData.map(data => data.comments),
    }
  }

  searchBarHandler = event => {
    this.setState({
      inputSearch: event.target.value,
    })
  }

  inputChangeHandler = event => {   
    this.setState({
      newComment: event.target.value,
    })
  } 

  postCommentHandler = () => {
    console.log(this.state.postedComments);
    this.setState({
      postedComments: this.state.postedComments.concat(this.state.newComment),
    })
  }


  render() {
    return (
      <div className="App">
        <SearchBar 
          searchInput={this.state.inputSearch}
          searchValue={this.searchBarHandler}
        />
        {
          this.state.instaData.map(dataObj => {
            return <PostContainer 
                      key={uuid()} 
                      data={dataObj}
                      value={this.state.newComment}
                      changes={this.inputChangeHandler}
                      clicked={this.postCommentHandler}/>
          })        
        }
      </div>
    );
  } 
}

export default App;