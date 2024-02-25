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
    <div className='bg-gradient-to-r from-color4 to-color1'>
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
      <div className='flex flex-row justify-center align-center'>
        <div>
          <form onSubmit={handleFormSubmit} className="max-w-lg mx-auto mt-8 shadow-md p-6 bg-white rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">List Your Garden as Community Garden</h2>
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
        </div>
        <div>
          <div className="text-center p-3 max-w-[500px] bg-color4 rounded-lg m-5">
            <h1 className=' text-yellow-300 text-semibold text-[30px]'>Benefits:</h1>
            <ul className='text-left mx-3'>
              <li className='text-white'><span className='text-yellow-300 text-[20px]'>Community Engagement</span>By adding your garden to a community garden, you become part of a vibrant community of like-minded individuals passionate about gardening and sustainability.</li>
              <li className='text-white'><span className='text-yellow-300 text-[20px'>Access to Resources</span> Community gardens often provide access to resources such as tools, seeds, and communal spaces for gardening, enabling you to expand your gardening knowledge and skills.</li>
              <li className='text-white'><span className='text-yellow-300 text-[20px'>Environmental Impact</span>Contributing to a community garden promotes environmental stewardship by fostering biodiversity, reducing food miles, and promoting sustainable practices like composting and rainwater harvesting.</li>
              <li className='text-white'><span className='text-yellow-300 text-[20px'>Health and Wellness</span>Gardening has been shown to have numerous health benefits, including stress reduction, increased physical activity, and improved mental well-being. Being part of a community garden encourages outdoor activity and connection with nature.</li>
              <li className='text-white'><span className='text-yellow-300 text-[20px'>Fresh Produce</span>Enjoy the satisfaction of growing your own fresh fruits, vegetables, and herbs. Community gardens often yield abundant harvests, providing you with access to nutritious, homegrown produce.</li>
            </ul>
          </div>
        </div>
      </div>
      <GardenDetails />
      <section className='text-center bg-color4 rounded-lg m-7 p-8'>
        <h1 className='text-[32px] text-yellow-400'>Incentives for Volunteers in Community Gardens:</h1>
        <ul className='text-left'>
          <li className='text-white'><span className='text-yellow-300 text-[20px]'>Fresh Produce Rewards: </span>Volunteers who contribute their time and effort to community gardens often receive fresh produce from the garden as a token of appreciation. Enjoy the fruits of your labor by taking home a variety of freshly harvested vegetables and herbs.</li>
          <li className='text-white'><span className='text-yellow-300 text-[20px]'>Community Events: </span>Community gardens often host events such as harvest festivals, potluck dinners, and workshops. Volunteers have the opportunity to participate in these events, fostering social connections and a sense of belonging.</li>
          <li className='text-white'><span className='text-yellow-300 text-[20px]'>Educational Opportunities: </span>Volunteers can learn valuable gardening skills through hands-on experience and educational workshops offered in community gardens. Gain knowledge about plant care, organic gardening methods, and sustainable practices from experienced gardeners and experts.</li>
          <li className='text-white'><span className='text-yellow-300 text-[20px]'>Health Benefits: </span>Engaging in gardening activities promotes physical activity, stress reduction, and mental well-being. Volunteers benefit from spending time outdoors, connecting with nature, and cultivating a sense of purpose and accomplishment.</li>
          <li className='text-white'><span className='text-yellow-300 text-[20px]'>Environmental Impact:</span> By volunteering in a community garden, individuals contribute to environmental conservation efforts by promoting biodiversity, reducing food waste, and creating green spaces that benefit the local ecosystem.</li>
        </ul>
        <p className='text-gray-300 text-left'>
          Joining a community garden as a gardener or volunteer offers a multitude of benefits, ranging from community engagement and access to fresh produce to educational opportunities and environmental stewardship. Get involved today and reap the rewards of nurturing a vibrant community garden!
        </p>
      </section>
    </div>
  )
}

export default Community