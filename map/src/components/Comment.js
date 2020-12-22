import React,{useState, useEffect} from 'react'
import { Button } from 'reactstrap';

export default function Comment({comment,handleLikeComment,handleUpdateComment}) {
  const [edit, setEdit] = useState(false);
  return (
    <div>
      {!edit ? 
        <div><span onDoubleClick={()=> setEdit(!edit)}>{comment.body}</span> <Button onClick = {()=>{handleLikeComment(comment.id)}} >like {comment.likes}</Button></div>
      :
        <div><textarea id = {`textarea${comment.id}`}onDoubleClick={()=> setEdit(!edit)}>{comment.body}</textarea> <Button onClick = {()=>{handleUpdateComment({id:comment.id,body:document.getElementById(`textarea${comment.id}`).value})}}>update</Button></div>
      }
    </div>
  )
}
