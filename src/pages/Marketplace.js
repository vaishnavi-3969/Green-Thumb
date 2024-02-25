import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCartPlus } from 'react-icons/fa';

const Marketplace = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleCheckout = () => {
    alert('Checkout process initiated!');
    window.location.href = 'https://buy.stripe.com/test_28o01662sfm60rm9AA';
    setCartItems([]);
  };

  const products = [
    { id: 1, name: 'Rose Plant', price: 20 },
    { id: 2, name: 'Fertilizer', price: 10 },
    { id: 3, name: 'Pruning Shears', price: 15 },
    { id: 4, name: 'Tulip Bulbs', price: 25 },
    { id: 5, name: 'Garden Gloves', price: 8 },
    { id: 6, name: 'Mulch', price: 12 },
    { id: 7, name: 'Potted Herbs Set', price: 30 },
    { id: 8, name: 'Garden Trowel', price: 10 },
    { id: 9, name: 'Watering Can', price: 18 },
    { id: 10, name: 'Vegetable Seeds Assortment', price: 20 },
    { id: 11, name: 'Garden Hose', price: 25 },
    { id: 12, name: 'Compost Bin', price: 35 },
    { id: 13, name: 'Potted Flowers Set', price: 28 },
    { id: 14, name: 'Garden Hand Rake', price: 12 },
    { id: 15, name: 'Insecticide Spray', price: 15 },
    { id: 16, name: 'Planting Pots Set', price: 22 },
    { id: 17, name: 'Garden Wheelbarrow', price: 45 },
    { id: 18, name: 'Garden Bench', price: 55 },
    { id: 19, name: 'Bird Bath', price: 40 },
    { id: 20, name: 'Garden Statues Set', price: 50 },
  ];


  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Marketplace</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-400">Price: ${product.price}</p>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-green-500 text-white py-2 px-4 rounded-full mt-4 flex items-center justify-center"
              >
                <FaCartPlus className="mr-2" /> Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cart */}
      <div className="fixed bottom-0 right-0 bg-gray-800 text-white p-4 m-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Shopping Cart</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className="divide-y divide-gray-700">
            {cartItems.map((item) => (
              <li key={item.id} className="py-2">
                {item.name} - ${item.price}
              </li>
            ))}
            <li className="pt-2">
              Total: ${cartItems.reduce((acc, curr) => acc + curr.price, 0)}
            </li>
            <li className="pt-2">
              <button
                onClick={handleCheckout}
                className="bg-blue-500 text-white py-2 px-4 rounded-full mt-2 w-full"
              >
                Checkout
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
