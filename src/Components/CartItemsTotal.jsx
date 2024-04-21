import React, { useContext, useEffect, useState } from "react";
import CartContext from "../context/CartContext/CartContext";
import FetchCartItems from "./FetchCartItems";

const CartItemsTotal = () => {
  const [total, setTotal] = useState(0);

  const state = useContext(CartContext);

  const getAllProduct = () => {
    const result = state.cartItemsTotal.map((obj) => {
      const values = Object.values(obj);
      return values;
    });

    const filteredArray = result.flat();

    // console.log(filteredArray);

    let qty = 1;
    if (filteredArray.length > 0) {
      qty = filteredArray[0].qty;
    }

    calculateTotal(filteredArray);

    return qty;
  };
  const calculateTotal = (cartItems) => {
    let totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.qty,
      0
    );

    setTotal(totalPrice);
  };

  useEffect(() => {
    getAllProduct();
  }, [state.counter]);

  return (
    <div>
      <div className="flex px-4 py-5 mt-10 m-2 mb-0 w-[50rem] justify-between border border-b-0  mx-auto">
        <div className="flex gap-40">
          {/* <img src={reactLogo} alt="" width="25px" /> */}
          <h1 className="ml-28">Product Name</h1>
          <h1>Price</h1>
        </div>
        <div className="mr-5">
          <p>Qty</p>
        </div>
      </div>

      {/* <div className="flex px-4 py-5 w-[50rem] justify-between border  mx-auto">
        <div className="flex gap-10">
          <img src={reactLogo} alt="" width="25px" />
          <h1>Product Name</h1>
        </div>
        <div className="mr-5">
          <p>Qty</p>
        </div>
      </div> */}

      <FetchCartItems products={state.productID} />

      <div className="flex px-4 py-5 mb-0 w-[50rem] justify-between border  mx-auto">
        <div className="flex gap-40">
          {/* <img src={reactLogo} alt="" width="25px" /> */}
          <h1 className="ml-28">TOTAL</h1>
        </div>
        <div className="mr-5">
          <p>${total ? total : 120}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItemsTotal;
