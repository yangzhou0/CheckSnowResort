import React,{useState, useEffect} from 'react'
import Comment from './Comment'

import { ListGroup, ListGroupItem,Button } from 'reactstrap';

export default function CommentList({comments,handleLikeComment}) {
  return (
    <div>
      <h2>comments:</h2>
      <ListGroup>
      {comments && comments.sort((a,b)=>{return b.likes - a.likes}).map((comment) => (
        <ListGroupItem>
          <Comment comment = {comment} handleLikeComment={handleLikeComment}/>
        </ListGroupItem>
      ))}
    </ListGroup>
    </div>
  )
}