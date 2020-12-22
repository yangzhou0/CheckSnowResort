import React,{useState, useEffect} from 'react'
import { ListGroup, ListGroupItem,Button } from 'reactstrap';

export default function Comment({comment,handleLikeComment}) {
  const [edit, setEdit] = useState(false);
  return (
    <div>
      {!edit ? 
        <div><span onDoubleClick={()=> setEdit(!edit)}>{comment.body}</span> <Button onClick = {()=>{handleLikeComment(comment.id)}} >like {comment.likes}</Button></div>
      :
        <span onDoubleClick={()=> setEdit(!edit)}>none</span>
      }
    </div>
  )
}
