import { useParams } from 'react-router-dom';
import gardening1 from '../assets/gardening/1.gif';
import gardening2 from '../assets/gardening/2.gif';
import gardening3 from '../assets/gardening/3.gif';
import gardening4 from '../assets/gardening/4.gif';
import gardening5 from '../assets/gardening/5.gif';
import gardening6 from '../assets/gardening/6.gif';
import gardening7 from '../assets/gardening/7.gif';


const GardenDetails = () => {
  const { gardenId } = useParams();

  const gardens = [
    {
    id: gardenId,
    name: 'Orchid Garden',
    location: 'New York',
    description: 'This is a beautiful garden with a variety of plants and flowers.',
    owner: 'John Doe',
    contact: 'johndoe@example.com',
    image: gardening1,
  },{
    id: '2',
    name: 'Sunny Meadows',
    location: 'Sunshine City',
    description: 'A sunny and vibrant garden filled with colorful flowers.',
    owner: 'Jane Smith',
    contact: 'janesmith@example.com',
    image: gardening2,
  },
  {
    id: '3',
    name: 'Evergreen Oasis',
    location: 'Serene Valley',
    description: 'An oasis of lush greenery with tall trees and tranquil ambiance.',
    owner: 'Michael Johnson',
    contact: 'michaeljohnson@example.com',
    image: gardening3,
  },
  {
    id: '4',
    name: 'Blooming Paradise',
    location: 'Floral Street',
    description: 'A paradise of blooming flowers with sweet fragrances in the air.',
    owner: 'Emily Wilson',
    contact: 'emilywilson@example.com',
    image: gardening4,
  },
  {
    id: '5',
    name: 'Zen Garden',
    location: 'Tranquil Lane',
    description: 'A peaceful garden designed for meditation and relaxation.',
    owner: 'David Thompson',
    contact: 'davidthompson@example.com',
    image: gardening5,
  },
  {
    id: '6',
    name: 'Secret Garden',
    location: 'Mystery Avenue',
    description: 'A hidden garden full of surprises and enchanting beauty.',
    owner: 'Olivia Davis',
    contact: 'oliviadavis@example.com',
    image: gardening6,
  },
  {
    id: '7',
    name: 'Wildflower Haven',
    location: 'Nature\'s Trail',
    description: 'A haven for wildflowers and native plants, attracting butterflies and birds.',
    owner: 'Daniel Rodriguez',
    contact: 'danielrodriguez@example.com',
    image: gardening7,
  },
  {
    id: '8',
    name: 'Urban Jungle',
    location: 'Metropolis City',
    description: 'An urban oasis filled with a diverse collection of plants and greenery.',
    owner: 'Sophia Martinez',
    contact: 'sophiamartinez@example.com',
    image: gardening1,
  },
  {
    id: '9',
    name: 'Cottage Garden',
    location: 'Cozy Lane',
    description: 'A charming garden with a mix of cottage-style flowers and vegetables.',
    owner: 'Liam Anderson',
    contact: 'liamanderson@example.com',
    image: gardening2,
  },
  {
    id: '10',
    name: 'Tropical Paradise',
    location: 'Exotic Island',
    description: 'A tropical paradise featuring palm trees, exotic flowers, and a serene beach.',
    owner: 'Mia Thomas',
    contact: 'miathomas@example.com',
    image: gardening3,
  },
  {
    id: '11',
    name: 'Moonlit Garden',
    location: 'Starry Night Street',
    description: 'A magical garden that comes to life under the moonlight with glowing plants.',
    owner: 'Ethan Clark',
    contact: 'ethanclark@example.com',
    image: gardening4,
  },
];

const garden = gardens.find((garden) => garden.id === gardenId);

if (!garden) {
  return <div>Invalid garden ID.</div>;
}

return (
  <div className="bg-gray-900 text-white p-6">
    <h2 className="text-3xl font-bold mb-4">Community Gardening Spaces</h2>

    <div className="mt-8 grid grid-cols-2 gap-4">
      {gardens.map((garden) => (
        <div key={garden.id} className="bg-gray-800 text-white p-4 rounded-lg flex hover:scale-105">
          <div>
            {garden.image && (
              <img src={garden.image} alt={garden.name} className="mt-4 rounded-lg shadow-md w-[150px]" />
            )}
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold mb-2">{garden.name}</h3>
            <p className="text-gray-400">Location: {garden.location}</p>
            <p className="mb-2">{garden.description}</p>
            <p>
              <strong>Owner:</strong> {garden.owner}
            </p>
            <p>
              <strong>Contact:</strong> {garden.contact}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
            }
export default GardenDetails;