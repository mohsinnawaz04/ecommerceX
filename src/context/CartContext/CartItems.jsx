import { useState } from "react";
import CartContext from "./CartContext";
import Navbar from "../../Components/Navbar";
import { Outlet } from "react-router-dom";

const CartItems = (props) => {
  const [CartItems, setCartItems] = useState(0);
  const [arrayOfSelectedProducts, setarrayOfSelectedProducts] = useState([]);
  const [productID, setproductID] = useState([]);
  const [cartProducts, setcartProducts] = useState({});
  const [counter, setCounter] = useState(0);

  const state = {
    AddCartItems: function () {
      setCartItems(CartItems + 1);
      // console.log("done adding", CartItems);
    },
    RemoveCartItems: function () {
      if (CartItems > 0) {
        setCartItems(CartItems - 1);
        // console.log("done removing", CartItems);
      }
    },
    Total: CartItems,

    addProductID: function (id) {
      setproductID((prev) => [...prev, id]);

      // console.log(productID);
    },

    removeProductID: function (arr, numberToRemove) {
      const index = arr.indexOf(numberToRemove); // Find the index of the number
      if (index !== -1) {
        arr.splice(index, 1); // Remove the element at the index
      }
    },

    productID: productID,

    addCartProducts: function (value) {
      setcartProducts((prev) => ({
        ...prev,
        [value]: 2,
      }));
    },

    TotalProducts: cartProducts,

    addToCartArray: function (id, image, name, price, qty) {
      if (arrayOfSelectedProducts.length > 0) {
        const result = arrayOfSelectedProducts.map((obj) => {
          const values = Object.values(obj);
          return values;
        });

        const filteredArray = result.flat();
        // console.log(filteredArray);

        for (let i = 0; i < filteredArray.length; i++) {
          if (filteredArray[i].id === id) {
            return;
          }
        }
      }

      setarrayOfSelectedProducts((prev) => [
        ...prev,
        {
          [id]: {
            name: name,
            image: image,
            price: price,
            qty: qty,
            id: id,
          },
        },
      ]);
    },

    cartItemsTotal: arrayOfSelectedProducts,

    counterFunction: function () {
      setCounter(counter + 1);
    },
    counter: counter,
  };

  return (
    <CartContext.Provider value={state}>
      <Navbar />
      <Outlet />
      {props.children}
    </CartContext.Provider>
  );
};

export default CartItems;
