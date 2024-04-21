import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import LoadMore from "./Components/LoadMore";

import reactLogo from "./assets/cart.svg";

function App() {
  const [products, setproducts] = useState([]);
  const [count, setcount] = useState(10);
  const maxCount = 100;

  useEffect(() => {
    const getAllProducts = async (number) => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products?limit=${number}`
        );
        const data = await res.json();

        setproducts(data.products);

        // console.log(products);
      } catch (error) {
        console.log("Eerror 101", error);
      }
    };

    getAllProducts(count);
  }, [count]);

  const handleClick = () => {
    setcount(count + 10);
  };
  return (
    <>
      <div className="bg-gray-100 py-4 h-screen w-full">
        {/* <Navbar /> */}
        <div className="min-h-fit bg-gray-100 flex flex-col">
          <div className="relative m-3 flex flex-wrap justify-center">
            {products?.map((product, i) => {
              return (
                <ProductCard
                  key={i}
                  name={product.title}
                  price={product.price}
                  image={product.thumbnail}
                  id={product.id}
                />
              );
            })}
          </div>
        </div>

        {count < maxCount && (
          <LoadMore handleClick={handleClick} text="Load More" />
        )}
      </div>
    </>
  );
}

export default App;
