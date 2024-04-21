import React, { useContext, useEffect, useRef, useState } from "react";
// import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import CartContext from "../context/CartContext/CartContext";
import { Link } from "react-router-dom";
import reactLogo from "../assets/cart.svg";
import reactLogo2 from "../assets/cartRemove.svg";

function ProductCard({ name, price, image, id }) {
  // const cartLogo = useRef("");
  const cartSvg = useRef("");
  const [count, setcount] = useState(true);
  // const [counter, setcounter] = useState(0);
  // const [arrayOfIds, setarrayOfIds] = useState([]);

  const CartItemsCounter = useContext(CartContext);

  // function isProductAddedToCart() {
  //   for (let i = 1; i <= 100; i++) {
  //     setarrayOfIds((prev) => [...prev, i]);
  //   }

  //   let isInCart = CartItemsCounter.cartItemsTotal;
  //   if (isInCart.length > 0) {
  //     const result = isInCart.map((obj) => {
  //       const values = Object.values(obj);
  //       return values;
  //     });

  //     const filteredArray = result.flat();

  //     const anotherArr = filteredArray.map((obj) => obj.id);
  //     console.log("anotherarr", anotherArr);

  //     let matchedItems = anotherArr.filter(
  //       (item) => item === arrayOfIds.forEach((id) => id)
  //     );
  //     console.log(matchedItems);
  //     setcounter(count + 1);

  //     // if (matchedItems.length > 0) {
  //     //   console.log("Item is already in cart");
  //     //   setcount(false);
  //     // } else {
  //     //   console.log("Item is not in cart");
  //     //   setcount(true);
  //     // }
  //   }
  // }

  const ShowCart = (e) => {
    const qty = 1;
    const statusEl = e.target;
    const id = statusEl.id;
    const classList = statusEl.classList;
    const prodName = statusEl.getAttribute("data-name");

    // console.log(prodName);

    CartItemsCounter.addCartProducts(prodName);
    // console.log("total PRoducts =>> ", CartItemsCounter.TotalProducts);

    // Mechanism to add or remove product id's from Global Context Array

    // [
    if (classList.contains("add")) {
      // console.log("should be added to array");
      CartItemsCounter.addProductID(id);

      CartItemsCounter.addToCartArray(id, image, name, price, qty);
      // console.log(
      //   "here are total cart items =>",
      //   CartItemsCounter.cartItemsTotal
      // );
    } else {
      // console.log("should be deleted from array");
      CartItemsCounter.removeProductID(CartItemsCounter.productID, id);
    }

    // console.log(CartItemsCounter.productID);
    // ]  End

    setcount((prev) => !prev);

    if (count === true) {
      CartItemsCounter.AddCartItems();
      // console.log("yeh rha total Items", CartItemsCounter.Total);
    } else {
      CartItemsCounter.RemoveCartItems();
    }
    // console.log(CartItemsCounter.TotalItems);
    // console.log(count);
    // isProductAddedToCart(id);
  };

  // useEffect(() => {
  //   isProductAddedToCart();
  // }, [counter]);

  return (
    <>
      <div
        className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer
        hover:scale-105 transition-all ease-in-out"
        id={id}
      >
        <div className="overflow-x-hidden rounded-2xl relative border">
          <Link to={`products/${id}`}>
            <img className="h-40 rounded-2xl w-full object-cover" src={image} />
          </Link>
          {count ? (
            // <p
            //   className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer add"
            //   ref={cartLogo}
            //   onClick={ShowCart}
            //   id={id}
            // >
            <img
              src={reactLogo}
              alt="cart logo"
              width="25px"
              ref={cartSvg}
              onClick={ShowCart}
              id={id}
              className="status add absolute right-5 top-2 bg-white w-[42px] p-2 rounded-full cursor-pointer shadow-xl hover:scale-110
              hover:bg-gray-100 transition-all"
              data-name={name}
            />
          ) : (
            // </p>
            // <p
            //   className="absolute right-2 top-2 bg-slate-100 rounded-full p-2 cursor-pointer group remove"
            //   onClick={ShowCart}
            // >
            // classname="h-6 w-6 group-hover:opacity-50 opacity-70 text-black remove"
            // <MdOutlineRemoveShoppingCart className="status h-6 w-7 text-black  add absolute right-5 top-2 bg-white  py-4 px-5  rounded-full cursor-pointer shadow-xl hover:scale-110 hover:bg-gray-100 transition-all" />
            <img
              src={reactLogo2}
              alt="cart"
              className="status remove absolute right-5 top-2 bg-white w-[42px] p-1 rounded-full cursor-pointer shadow-xl hover:scale-110
              hover:bg-gray-100 transition-all"
              onClick={ShowCart}
              // id={id}
            />

            // </p>
          )}
        </div>
        <Link to={`products/${id}`}>
          <div className="mt-4 pl-2 mb-2 flex justify-between hover:opacity-60">
            <div>
              <p className="text-lg font-semibold text-gray-900 mb-0">{name}</p>
              <p className="text-md text-gray-800 mt-0">{price}$</p>
            </div>
            <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 group-hover:opacity-70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="gray"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
