import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";

function App() {
  const buttonRef = useRef("");
  const [products, setproducts] = useState([]);
  const [count, setcount] = useState(10);
  const maxCount = 100;

  useEffect(() => {
    const getAllProducts = async (number) => {
      const res = await fetch(`https://dummyjson.com/products?limit=${number}`);
      const data = await res.json();

      setproducts(data.products);

      console.log(products);
    };

    getAllProducts(count);
  }, [count]);

  const handleClick = () => {
    setcount(count + 10);
  };
  return (
    <div className="bg-gray-100 py-4 h-screen w-full">
      <Navbar />

      <div className="min-h-fit bg-gray-100 flex flex-col">
        <div className="relative m-3 flex flex-wrap justify-center">
          {products?.map((product) => {
            return (
              <ProductCard
                key={product.id}
                name={product.title}
                price={product.price}
                image={product.thumbnail}
              />
            );
          })}
        </div>
      </div>

      {count < maxCount && (
        <div className="flex justify-center py-8">
          <button
            ref={buttonRef}
            type="button"
            className="py-3 px-6 rounded-sm bg-gray-400 text-white text-sm font-semibold"
            onClick={handleClick}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
