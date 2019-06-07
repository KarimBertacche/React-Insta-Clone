import React, { Component } from 'react';
import pt from 'prop-types';
import uuid from 'uuid';
import MomentComponent from '../MomentComponent/MomentComponent';
import NewCommentSection from '../NewCommentSection/NewCommentSection';
import CommentsIcons from './CommentIcons';
import moment from 'moment';
import styled from 'styled-components';


const StylesCommentSection = styled.div`
  section {
    height: 85px;
    overflow-y: scroll;
    padding-top: 0;
    text-align: left;

    div {
      margin-bottom: 10px;

      span {
        &:first-child {
          font-weight: bold;
          font-size: 1.5rem;
        }

        &:last-child {
          height: 20px;
          font-size: 1.5rem;
          margin: 0;

          &:hover {
            text-decoration: line-through;
            text-decoration-color: #f00;
            cursor: pointer;
          }

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
`;

class CommentSection extends Component{
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      newComment: '',
      commentsArr: [],
      newTimestamp: this.props.data.timestamp,
      dataName: this.props.data.id,
      username: '',
      postLikes: this.props.likes,
      postIdx: this.props.postIdx,
      allCommentsData: this.props.allCommentsData
    }
  }

  componentDidMount() {
    // let newCommentsArr = localStorage.getItem('commentsArr');
    let loggedUser = localStorage.getItem('usernameData');
    this.setState({
      username: loggedUser,
    })
  }

  inputChangeHandler = event => {   
    this.setState({
      newComment: event.target.value,
    })
  } 

  newCommentObject = () => {
    let newCommentObj = {
      username: this.state.username,
      text: this.state.newComment
    }
    return newCommentObj
  }

  addNewComment = (event, commentIdx) => {
    let newPostComment = this.newCommentObject();
    
    if(event.key === 'Enter' && this.state.newComment !== '') {
      let newCommentArr = [newPostComment].concat(this.state.comments)
      const updatedCommentArr = this.state.allCommentsData.map((commentObj, idx) => {
        if(idx === commentIdx) {
          console.log(commentObj)
          commentObj = newCommentArr
          console.log(commentObj)
        }
        return commentObj
      })

      this.setState({
        comments: newCommentArr,
        newComment: '',
        newTimestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
      })

      localStorage.setItem('comments', JSON.stringify(updatedCommentArr));
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

  removeCommentHandler = (event) => {
    let selectedComment = event.target.textContent;

    const newCommentArr = this.state.comments.filter(comment => comment.text !== selectedComment);

    this.setState({
      comments: newCommentArr,
    })   
  }

  likePostHandler = () => {
    this.props.postIds.map(postId => {
      if(postId === this.props.id) {        
        return this.setState(prevState => ({    
            postLikes: prevState.postLikes + 1,
        }))
      }  
      return null
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.comments < this.state.comments && this.props.data.id === this.state.dataName) {
      return localStorage.setItem(`${this.state.dataName}`, JSON.stringify(this.state.comments))
    }   
  }

  render() {
    return(
      <StylesCommentSection>
        <CommentsIcons 
          likePostHandler={this.likePostHandler}
          postLikes={this.state.postLikes}
        />    
        <section>
          {
            this.state.comments.map(comment => {
              return(  
                <div 
                  key={uuid()}>
                  <span   
                  >{comment.username} </span>      
                  <span
                    onClick={this.removeCommentHandler}>{comment.text}</span>
                </div>
              );
            })
          }
        </section>
        <div>
          <MomentComponent 
            date={this.state.newTimestamp}/>
          <NewCommentSection 
            value={this.state.newComment}
            changed={this.inputChangeHandler}
            clicked={this.postCommentHandler}  
            keyPress={(event) => this.addNewComment(event, this.state.postIdx)}
            />
        </div>  
      </StylesCommentSection>
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



