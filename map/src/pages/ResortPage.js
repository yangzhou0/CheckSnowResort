import React,{useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { fetchResortByName} from '../api/ResortAPI';
import { likeComment,editComment} from '../api/CommentAPI';
import CommentList from '../components/CommentList'
export default function ResortPage(props){
  const [resort, setResort] = useState(Object());
  let resortName = props.match.params.resortName
  useEffect(()=>{
    fetchResortByName(resortName).then(resort => setResort(resort))
  },[])
  // [] as the second argument will only call useEffect once when component is rendered
  // for the first time, anytime after that this useEffect will not be called. 
  // in this case, a change in state will not trigger re-render
  // this is minicing componentDidMount
  
  const handleLikeComment = (commentID)=>{
    likeComment(commentID).then(()=>fetchResortByName(resortName)).then(resort => setResort(resort))
  }

  const handleUpdateComment = (commentObject) =>{
    editComment(commentObject).then(()=>fetchResortByName(resortName)).then(resort => setResort(resort))
  }

  return (
    <div>
      <CommentList comments={resort.comments} handleLikeComment={handleLikeComment} handleUpdateComment={handleUpdateComment} />
    </div>
  )
}
