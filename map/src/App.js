import React,{useState} from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'

export default function App(){
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return ( 
    <div>
      <ReactMapGL
      {...viewport}
      mapStyle = 'mapbox://styles/yangzhou93/ckipmnmy613zi17ti10exzems'
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}/>
      
    </div>
      

  );
}