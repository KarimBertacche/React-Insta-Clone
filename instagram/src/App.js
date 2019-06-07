import React, { Component } from 'react';
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
      commentsData: [],
      inputSearch: '', 
      postIds: dummyData.map(dataObj => dataObj.id = `${uuid()}`),
      postLikes: dummyData.map(dataObj => dataObj.likes),
      newUser: ''
    }
  }

  componentDidMount() {
      const commentsArr = dummyData.map(comment => comment.comments)

      this.setState({
          instaData: dummyData,
          commentsData: commentsArr,
      })

      if(this.state.instaData === dummyData) {
          localStorage.getItem('instaData') && this.setState({
          instaData: JSON.parse(localStorage.getItem('instaData')),
          });
      };

      let newCommentsArr = JSON.parse(localStorage.getItem('comments'));
      if(newCommentsArr > this.state.commentsData) {
        this.setState({
          commentsData: newCommentsArr,
        })
      } 
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
        searchNowHandler={this.searchNowHandler}
        allCommentsData={this.state.commentsData}/>
    );
  } 
}

export default App;