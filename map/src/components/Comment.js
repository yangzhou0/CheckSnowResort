import React,{useState, useEffect} from 'react'
import { ListGroup, ListGroupItem,Button } from 'reactstrap';

export default function Comment({comment,handleLikeComment,handleUpdateComment}) {
  const [edit, setEdit] = useState(false);
  return (
    <div>
      {!edit ? 
        <div><span onDoubleClick={()=> setEdit(!edit)}>{comment.body}</span> <Button onClick = {()=>{handleLikeComment(comment.id)}} >like {comment.likes}</Button></div>
      :
        <div><textarea onDoubleClick={()=> setEdit(!edit)}>{comment.body}</textarea> <Button onClick = {()=>{handleUpdateComment({id:4,body:'edited'})}}>update</Button></div>
      }
    </div>
  )
}
