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

  addNewComment = event => {
    let newCommentObj = {
      username: "anonymous",
      text: this.state.newComment
    }

    if(event.key === 'Enter' && this.state.newComment !== '') {
      let newCommentArr = this.state.comments.concat(newCommentObj)
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
          <MomentComponent />
          <NewCommentSection 
            data={this.props.data}
            value={this.state.newComment}
            changed={this.inputChangeHandler}
            clicked={this.props.clicked}  
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