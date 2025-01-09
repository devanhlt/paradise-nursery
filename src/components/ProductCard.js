import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({ plant }) => {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
      <img
        src={plant.image}
        alt={plant.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-green-800 mb-2">
        {plant.name}
      </h3>
      <p className="text-gray-600 text-sm mb-2">{plant.description}</p>
      <p className="text-lg font-bold text-green-700">${plant.price}</p>
      <button
        onClick={() => dispatch(addToCart(plant))}
        className="bg-green-600 text-white px-4 py-2 rounded-md mt-4 w-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
