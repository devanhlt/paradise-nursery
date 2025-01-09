import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({ plant }) => {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img
        src={plant.image}
        alt={plant.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-xl font-semibold mt-2">{plant.name}</h3>
      <p className="text-gray-600">{plant.description}</p>
      <p className="text-lg font-bold mt-2">${plant.price}</p>
      <button
        onClick={() => dispatch(addToCart(plant))}
        className="bg-green-600 text-white px-4 py-2 rounded-md mt-2 w-full"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
