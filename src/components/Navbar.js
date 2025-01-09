import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/paradise-nursery" className="text-2xl font-bold">
          Paradise Nursery
        </Link>
        <div className="flex gap-6">
          <Link to="/paradise-nursery" className="hover:text-green-200">
            Home
          </Link>
          <Link
            to="/paradise-nursery/products"
            className="hover:text-green-200"
          >
            Products
          </Link>
          <Link to="/paradise-nursery/cart" className="hover:text-green-200">
            Cart ({itemCount})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
