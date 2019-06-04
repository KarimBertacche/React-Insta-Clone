import React, { Component } from 'react';
import './CommentSection.css';
import pt from 'prop-types';
import uuid from 'uuid';
import MomentComponent from '../MomentComponent/MomentComponent';
import NewCommentSection from '../NewCommentSection/NewCommentSection';

class CommentSection extends Component{
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      newComment: '',
    }
  }

  inputChangeHandler = event => {   
    this.setState({
      newComment: event.target.value,
    })
  } 

  newCommentObject = () => {
    let newCommentObj = {
      username: "anonymous",
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
            date={this.props.data.timestamp}/>
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



