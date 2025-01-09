import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-green-50 relative">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('/paradise-nursery/images/nursery-background.jpeg')",
          opacity: 0.3,
        }}
      />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-6">
            Welcome to Paradise Nursery
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover our collection of beautiful plants for your home and garden
          </p>
          <Link
            to="/paradise-nursery/products"
            className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-700 transition-colors"
          >
            Browse Plants
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
