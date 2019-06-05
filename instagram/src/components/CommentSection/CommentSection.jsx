import React, { Component } from 'react';
import './CommentSection.css';
import pt from 'prop-types';
import uuid from 'uuid';
import MomentComponent from '../MomentComponent/MomentComponent';
import NewCommentSection from '../NewCommentSection/NewCommentSection';
import moment from 'moment';

class CommentSection extends Component{
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      newComment: '',
      newTimestamp: this.props.data.timestamp,
    }
  }

  // componentDidMount() {
  //   localStorage.getItem('newMessages') && this.setState({
  //     comments: JSON.parse(localStorage.getItem('newMessages')),
  //   });
  // }

  inputChangeHandler = event => {   
    this.setState({
      newComment: event.target.value,
    })
  } 

  newCommentObject = () => {
    let loggedUser = localStorage.getItem('usernameData')
    let newCommentObj = {
      username: loggedUser,
      text: this.state.newComment
    }
    return newCommentObj
  }

  addNewComment = event => {
    let newPostComment = this.newCommentObject();
    
    // let newCommentArr = this.state.comments.concat(newCommentObj)
    if(event.key === 'Enter' && this.state.newComment !== '') {
      let newCommentArr = [newPostComment].concat(this.state.comments)
      this.setState({
        comments: newCommentArr,
        newComment: '',
        newTimestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
      })
    }     
  } 

  postCommentHandler = () => {
    let newPostComment = this.newCommentObject();

    if(this.state.newComment !== '') {
      let newCommentArr = [newPostComment].concat(this.state.comments)
      this.setState({
        comments: newCommentArr,
        newComment: '',
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.comments < this.state.comments) {
      this.state.comments.map((comment, idx) => {
        return localStorage.setItem(`newMessages${idx}`, JSON.stringify(this.state.comments[idx]))
      })    
    }  
  }

  render() {
    return(
      <>
        <div className="comment-section">
          {
            this.state.comments.map(comment => {
              return(        
                <p className="comment" 
                  key={uuid()}>
                    <span className="username"
                    >{comment.username} </span>
                {comment.text}</p>
              )
            })
          }
        </div>
        <div>
          <MomentComponent 
            date={this.state.newTimestamp}/>
          <NewCommentSection 
            value={this.state.newComment}
            changed={this.inputChangeHandler}
            clicked={this.postCommentHandler}  
            keyPress={this.addNewComment}/>
        </div>  
      </>
    );
  }
}

CommentSection.propTypes = {
    comments: pt.arrayOf(pt.shape({
        username: pt.string.isRequired,
        text: pt.string.isRequired
    }).isRequired)
}

export default CommentSection;



