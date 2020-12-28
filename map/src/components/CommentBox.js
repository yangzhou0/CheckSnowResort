import React,{useState, useEffect} from 'react'
import Comment from './Comment'
import './css/commentBoxComponent.css'

import { ListGroup, ListGroupItem,Button } from 'reactstrap';

export default function CommentBox({comments,handleLikeComment,handleUpdateComment,handleDeleteComment,handleAddComment}) {
  const [showComments,setShowComments] = useState(false)
  return(
    <h1>hi</h1>
  )
  // return (
  //   <div>
  //     <h2>comments:</h2>
  //     <ListGroup>
  //       {comments && comments.sort((a,b)=>{return b.likes - a.likes}).map((comment) => (
  //         <ListGroupItem>
  //           <Comment comment = {comment} handleLikeComment={handleLikeComment} handleUpdateComment={handleUpdateComment} handleDeleteComment={handleDeleteComment} handleAddComment={handleAddComment}/>
  //         </ListGroupItem>
  //       ))}
  //     </ListGroup>
  //     <div>
  //       <textarea id = {`newComment`}></textarea>  
  //       <Button onClick = {()=>{handleAddComment({body:document.getElementById(`newComment`).value})}}>Add Comment</Button>
  //     </div>
  //   </div>
  // )
}