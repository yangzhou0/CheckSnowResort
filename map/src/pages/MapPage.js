import React,{useState, useEffect} from 'react'
import ReactMapGL, {Marker,Popup} from 'react-map-gl'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import * as resortsData from '../data/epic_resorts.json'

export default function MapPage(){
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 39.7392,
    longitude: -104.9903,
    zoom: 10
  });

  const [selectedResort, setSelectedResort] = useState(null);
  const handleClick = (resort)=>{
    setSelectedResort(resort)
  }

  useEffect(()=>{
    const listener = (e)=>{
      if(e.key == 'Escape'){
        setSelectedResort(null)
      }
    }
    window.addEventListener('keydown',listener)
  },[])

  return ( 
    <div>
      <ReactMapGL
      {...viewport}
      mapStyle = 'mapbox://styles/yangzhou93/ckipmnmy613zi17ti10exzems'
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}>
      {resortsData.resorts.map((resort,index)=>
        <Marker key = {index} latitude = {resort.coordinates[0]} longitude = {resort.coordinates[1]}>
          <button className = 'marker-btn' onClick = {(e)=>{e.preventDefault();handleClick(resort)}}>
            <img src = '/icons/snowboard.png' alt ='resort' />
          </button>
        </Marker>
      )}
        {selectedResort && <Popup latitude = {selectedResort.coordinates[0]} longitude = {selectedResort.coordinates[1]} closeOnClick={false} onClose={() => setSelectedResort(null)}>
          <div>
            <Link to={`/resorts/${selectedResort.name}`}>{selectedResort.name}</Link>
            <p>{selectedResort.description}</p>
            <a href = {selectedResort.website}>website</a>
          </div>
        </Popup>}
      </ReactMapGL>
    </div>
  );
}