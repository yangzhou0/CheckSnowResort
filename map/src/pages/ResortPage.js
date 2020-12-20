import React,{useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { fetchResortByName} from '../api/ResortAPI';

export default function ResortPage(props){
  const [resort, setResort] = useState(Object());
  useEffect(()=>{
    let resortName = props.match.params.resortName
    fetchResortByName(resortName).then(resort => {setResort(resort);console.log('resortObject',resort)})
  },[])

  return (
    <div>
      <h1>resort page</h1>
    </div>
  )
}
