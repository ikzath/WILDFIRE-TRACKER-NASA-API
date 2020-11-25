import React, { useState } from 'react';
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import useToggleHook from "./useToggleHook";


function Maps({ eventData, center, zoom }) {

  const [loadingInfo, setloadingInfo] = useState(null);
  
  
  const markers = eventData?.map( (ev, key) => {
      if(ev.categories[0].id === 8) {
          return  <LocationMarker key={ev.id} lat= {ev.geometries[0].coordinates[1]} lng= {ev.geometries[0].coordinates[0]} 
          onClick = { () => setloadingInfo({ id: ev.id, title: ev.title}) } /> 
        }
        return null ;
    })
    
    
  return (
  <div className='map'>
        <GoogleMapReact 
        bootstrapURLKeys={{ key: 'AIzaSyAZs02Kdr-jPW5NpreGOlUB-g7lRyM60iY'      
        }}
        defaultCenter= {center}
        defaultZoom = {zoom}      >
      
      setTimeout( () => {
          { markers }            
      }, 3000);

    </GoogleMapReact>
    {loadingInfo && < LocationInfoBox info= {loadingInfo} /> }
        
  </div>
    )
}

Maps.defaultProps = {
    center: {  
      lat: 42.3265,
      lng: -122.8756
    },
    zoom: 6

}

export default Maps