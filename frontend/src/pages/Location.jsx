import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const LocationPage = () => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={{width: '100%', height: '100vh', marginTop: 100}}
        center={{lat: 51.0447, lng: -114.0719}}
        zoom={10}
        options={{streetViewControl: false}}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default LocationPage;