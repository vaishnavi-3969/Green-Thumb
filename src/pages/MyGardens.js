import React, { useState } from 'react';

const MyGardens = () => {
  const [plants, setPlants] = useState([]);
  const [plantFormData, setPlantFormData] = useState({
    name: '',
    wateringSchedule: '',
    fertilizerSchedule: '',
  });

  const handlePlantFormChange = (e) => {
    const { name, value } = e.target;
    setPlantFormData({ ...plantFormData, [name]: value });
  };

  const handleAddPlant = () => {
    const newPlant = { ...plantFormData };
    setPlants([...plants, newPlant]);
    setPlantFormData({
      name: '',
      wateringSchedule: '',
      fertilizerSchedule: '',
    });
  };

  return (
    <div className="bg-gradient-to-r from-color4 to-color1 min-h-screen py-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">My Gardens</h2>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={plantFormData.name}
            onChange={handlePlantFormChange}
            placeholder="Plant Name"
            className="form-input w-full mt-1"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="wateringSchedule"
            value={plantFormData.wateringSchedule}
            onChange={handlePlantFormChange}
            placeholder="Watering Schedule"
            className="form-input w-full mt-1"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="fertilizerSchedule"
            value={plantFormData.fertilizerSchedule}
            onChange={handlePlantFormChange}
            placeholder="Fertilizer Schedule"
            className="form-input w-full mt-1"
          />
        </div>
        <button
          onClick={handleAddPlant}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
        >
          Add Plant
        </button>
      </div>
      <div className="max-w-3xl mx-auto mt-8">
        <h3 className="text-xl font-bold mb-4 text-center">My Plants</h3>
        {plants.map((plant, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h4 className="font-semibold">{plant.name}</h4>
            <p><strong>Watering Schedule:</strong> {plant.wateringSchedule}</p>
            <p><strong>Fertilizer Schedule:</strong> {plant.fertilizerSchedule}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyGardens;
