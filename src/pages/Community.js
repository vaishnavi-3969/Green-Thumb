import React from 'react'
import GardenDetails from './GardenDetails'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Community = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 40.7128,
    lng: -74.006,
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyDeKz0y7StoKZygSiCPt49Eu-agkXvuN5E">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
          options={options}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
      <GardenDetails />
    </div>
  )
}

export default Community