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

  // componentDidMount() {
  //   localStorage.getItem('instaPost') && this.setState({
  //     instaData: JSON.parse(localStorage.getItem('instaPost')),
  //   })
  // }

  componentDidMount() {
    this.setState({
      instaData: dummyData,
    })
  }

  searchBarHandler = event => {
    this.setState({
      inputSearch: event.target.value,
    })
  }

  searchNowHandler = event => {
    let newDataArr = this.state.instaData;

    if(event.key === 'Enter' && this.state.inputSearch !== '') {
      let searchItem = newDataArr.filter(dataObj => dataObj.username.toLowerCase().startsWith(this.state.inputSearch.toLowerCase()));

      this.setState({
        instaData: searchItem,
        inputSearch: ''
      })
    }
  }

  likePostHandler = (id, likes) => {
    this.state.postIds.map((postId, idx) => {
      if(postId === id) {
        this.setState(prevState => ({
          postlikes: prevState.postLikes[idx] = likes + 1,
        }))
      }   
    })
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('instaPost', JSON.stringify(nextState.instaData));
  }

  render() {
    return (
      <div className="App">
        <SearchBar 
          searchInput={this.state.inputSearch}
          searchValue={this.searchBarHandler}
          searchNow={this.searchNowHandler}
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