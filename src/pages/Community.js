import React, { useState } from 'react'
import GardenDetails from './GardenDetails'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Community = () => {
  const [gardenFormData, setGardenFormData] = useState({
    name: '',
    location: '',
    description: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setGardenFormData({ ...gardenFormData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(gardenFormData);
    alert("Form submitted! Your garden will soon be verified and added to the community garden spaces.");
  };

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
      <form onSubmit={handleFormSubmit} className="max-w-lg mx-auto mt-8 shadow-md p-6 bg-white rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Your Garden</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold">Garden Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={gardenFormData.name}
            onChange={handleFormChange}
            placeholder="Enter garden name"
            className="form-input w-full mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-semibold">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={gardenFormData.location}
            onChange={handleFormChange}
            placeholder="Enter location"
            className="form-input w-full mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-semibold">Description</label>
          <textarea
            id="description"
            name="description"
            value={gardenFormData.description}
            onChange={handleFormChange}
            placeholder="Enter description"
            className="form-textarea w-full mt-1"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="area" className="block text-sm font-semibold">Area (sq. ft.)</label>
          <input
            type="number"
            id="area"
            name="area"
            value={gardenFormData.area}
            onChange={handleFormChange}
            placeholder="Enter garden area"
            className="form-input w-full mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="plants" className="block text-sm font-semibold">Plants</label>
          <input
            type="text"
            id="plants"
            name="plants"
            value={gardenFormData.plants}
            onChange={handleFormChange}
            placeholder="Enter plants grown"
            className="form-input w-full mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="volunteers" className="block text-sm font-semibold">Number of Volunteers</label>
          <input
            type="number"
            id="volunteers"
            name="volunteers"
            value={gardenFormData.volunteers}
            onChange={handleFormChange}
            placeholder="Enter number of volunteers needed"
            className="form-input w-full mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-semibold">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            value={gardenFormData.image}
            onChange={handleFormChange}
            className="form-input w-full mt-1"
          />
        </div>
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Add my Garden</button>
      </form>

      <GardenDetails />
    </div>
  )
}

export default Community