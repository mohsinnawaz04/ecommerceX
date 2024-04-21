import React, { useContext, useEffect, useState } from "react";
import CartContext from "../context/CartContext/CartContext";

const FetchCartItems = ({ products, counter }) => {
  const [filterProducts, setfilterProducts] = useState([]);
  const [Arr2, setArr2] = useState([]);
  const state = useContext(CartContext);
  const [count, setcount] = useState(0);

  const getAllProduct = () => {
    setfilterProducts(state.cartItemsTotal);

    const result = filterProducts.map((obj) => {
      const values = Object.values(obj);
      return values;
    });

    const filteredArray = result.flat();

    setArr2(filteredArray);
  };

  const quantity = (e) => {
    const button = e.target;
    if (button.classList.contains("add")) {
      // console.log("add button");

      let filtered = Arr2.filter((obj) => obj.id === button.id);

      let quantity = filtered[0].qty;
      quantity = quantity + 1;
      filtered[0].qty = quantity;

      state.counterFunction();

      setcount((prev) => prev + 1);
    } else {
      // console.log("remove button");

      state.counterFunction();

      let filtered = Arr2.filter((obj) => obj.id === button.id);
      let quantity = filtered[0].qty;

      if (quantity > 1) {
        quantity = quantity - 1;
        filtered[0].qty = quantity;
        setcount((prev) => prev + 1);
      } else {
        alert("cannot go below 1");
      }
    }
  };

  useEffect(() => {
    getAllProduct();
  }, [filterProducts, count]);

  return (
    <>
      {Arr2?.map((product, i) => (
        <div
          className="flex px-4 py-5 w-[50rem] justify-between border mx-auto relative"
          key={i}
        >
          <div className="flex justify-center gap-10 items-center">
            <img
              src={product.image}
              alt="product image"
              width="70px"
              className="object-cover rounded-sm"
            />
            <h1>{product.name}</h1>
            <div className="w-[8rem] text-center absolute left-[22rem]">
              <h1>${product.price}</h1>
            </div>
          </div>
          <div className="mr-5 flex items-center">
            <span
              className="remove bg-slate-300 py-2 px-4 rounded rounded-r-none cursor-pointer hover:bg-slate-400"
              onClick={quantity}
              id={product.id}
            >
              -
            </span>
            <input
              type="text"
              id="qtyButton1"
              className="bg-slate-200 py-2 px-5 text-center w-16"
              value={product.qty}
              readOnly
            />
            <span
              className="add bg-slate-300 py-2 px-4 rounded rounded-l-none cursor-pointer hover:bg-slate-400"
              onClick={quantity}
              id={product.id}
            >
              +
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default FetchCartItems;
