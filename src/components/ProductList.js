import React from "react";
import ProductCard from "./ProductCard";
import { plants } from "../data/plants";

const ProductList = () => {
  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="container mx-auto px-4 py-8">
      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <ProductCard key={plant.id} plant={plant} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
