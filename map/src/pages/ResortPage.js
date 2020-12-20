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

  const handleLikeComment = ()=>{
    console.log('liked')
  }

  return (
    <div>
      <CommentList comments={resort.comments} handleLikeComment={handleLikeComment} />
    </div>
  )
}
