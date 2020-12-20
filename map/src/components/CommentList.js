import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default function CommentList({comments}) {
  return (
    <div>
      <h2>comments:</h2>
      <ListGroup>
      {comments && comments.map((comment, index) => (
        <ListGroupItem>
          <div>{comment.body} {comment.likes}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
    </div>
    
  )
}