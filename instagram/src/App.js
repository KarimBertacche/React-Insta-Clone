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
      instaData: [],
      inputSearch: '', 
      postIds: dummyData.map(dataObj => dataObj.id = `${uuid()}`),
      postLikes: dummyData.map(dataObj => dataObj.likes),
    }
  }

  componentDidMount() {
    this.setState({
      instaData: dummyData
    })
  }

  searchBarHandler = event => {
    this.setState({
      inputSearch: event.target.value,
    })
  }

  likePostHandler = (id, likes) => {
    this.state.postIds.map((postId, idx) => {
      if(postId === id) {
        this.setState({
          postlikes: this.state.postLikes[idx] = likes + 1,
        })
      }   
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
          this.state.instaData.map((dataObj, idx) => {
            return <PostContainer 
                      key={uuid()} 
                      id={this.state.postIds[idx]}
                      data={dataObj}
                      postLikes={this.state.postLikes[idx]}
                      likePostHandler={this.likePostHandler}/>
          })        
        }
      </div>
    );
  } 
}

export default App;