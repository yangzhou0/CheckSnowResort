import React,{useState, useEffect} from 'react'
import { Button } from 'reactstrap';
import './css/commentBoxComponent.css'

export default function Comment({comment,handleLikeComment,handleUpdateComment,handleDeleteComment,handleAddComment}) {
  const [edit, setEdit] = useState(false);
  return (
    <div className="comment">
      {!edit ? 
        <div className="comment-body"><span onDoubleClick={()=> setEdit(!edit)}>{comment.body}</span> <Button onClick = {()=>{handleLikeComment(comment.id)}} >like {comment.likes}</Button></div>
      :
        <div className="comment-body">
          <textarea id = {`textarea${comment.id}`}onDoubleClick={()=> setEdit(!edit)}>{comment.body}</textarea> 
          <div className="comment-footer">
            <Button className="comment-footer-delete" onClick = {()=>{handleUpdateComment({id:comment.id,body:document.getElementById(`textarea${comment.id}`).value}); setEdit(!edit)}}>Update</Button>
            <Button className="comment-footer-delete" onClick = {()=>{handleDeleteComment(comment.id);setEdit(!edit)}}>Delete</Button>
          </div>
        </div>
      }
    </div>
  )
}
