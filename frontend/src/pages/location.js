import React from 'react'
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from 'google-maps-react';

const LocationPage = () => {
  const {} = useLoadScript({googleMapsApiKey})
  return (
    <div>
        <p>Map Page POGGERs</p>
    </div>
  )
}

export default LocationPage;