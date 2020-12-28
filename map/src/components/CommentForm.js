import React from 'react'
import './css/commentBoxComponent.css'

export default function CommentForm(handleAddComment) {
  return (
    <form className="comment-form" onSubmit={()=>{handleAddComment({body:document.getElementById(`newComment`).value})}}>
        <div className="comment-form-fields">
          <input placeholder="Name" required ></input><br />
          <textarea id = 'newComment' placeholder="Comment" rows="4" required ></textarea>
        </div>
        <div className="comment-form-actions">
          <button type="submit">Post Comment</button>
        </div>
    </form>
  )
}
