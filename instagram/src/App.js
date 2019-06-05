import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import withAuthenticate from './authentication/authentication';
import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/LoginPage';
import uuid from 'uuid';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

class App extends Component {
  constructor() {
    super();
    this.state = {
      instaData: [],
      inputSearch: '', 
      postIds: dummyData.map(dataObj => dataObj.id = `${uuid()}`),
      postLikes: dummyData.map(dataObj => dataObj.likes),
      newUser: '',
    }
  }

  componentDidMount() {
      this.setState({
          instaData: dummyData,
      })

      if(this.state.instaData === dummyData) {
          localStorage.getItem('instaData') && this.setState({
          instaData: JSON.parse(localStorage.getItem('instaData')),
          });
      };
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
          return this.setState(prevState => ({
              postlikes: prevState.postLikes[idx] = likes + 1,
          }))
          }  
          return null
      })
  }

  componentDidUpdate(nextProps, nextState) {
      localStorage.setItem('instaPost', JSON.stringify(nextState.instaData));
  }

  render() {
    return (
      <ComponentFromWithAuthenticate
        inputSearch={this.state.inputSearch}
        instaData={this.state.instaData}
        postIds={this.state.postIds}
        postLikes={this.state.postLikes}
        likePostHandler={this.likePostHandler}
        searchBarHandler={this.searchBarHandler}
        searchNowHandler={this.searchNowHandler}/>
    );
  } 
}

export default App;