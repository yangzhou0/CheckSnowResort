import React,{useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { fetchResortByName} from '../api/ResortAPI';
import CommentList from '../components/CommentList'
export default function ResortPage(props){
  const [resort, setResort] = useState(Object());
  useEffect(()=>{
    let resortName = props.match.params.resortName
    fetchResortByName(resortName).then(resort => setResort(resort))
  },[])
  // [] as the second argument will only call useEffect once when component is rendered
  // for the first time, anytime after that this useEffect will not be called. 
  // in this case, a change in state will trigger re-render, but will not call useEffect
  // this is minicing componentDidMount
  
  const handleLikeComment = (commentID)=>{
    console.log(`liked comment ${commentID}`)
  }

  return (
    <div>
      <CommentList comments={resort.comments} handleLikeComment={handleLikeComment} />
    </div>
  )
}
