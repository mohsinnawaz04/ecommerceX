import React, { useContext, useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../context/CartContext/CartContext";
import { Link } from "react-router-dom";

function Navbar() {
  const menu = useRef("");
  const cartItems = useRef("");
  const [count, setcount] = useState(false);
  const [cartQty, setcartQty] = useState(0);
  const [counter, setcounter] = useState([]);

  const State = useContext(CartContext);

  const handleClick = () => {
    console.log(menu.current);

    setcount((prev) => !prev);
  };
  const handleQty = () => {
    let qty = State.cartItemsTotal.length;

    setcartQty(qty);
  };

  useEffect(() => {
    handleQty();
  }, [State.cartItemsTotal.length]);

  return (
    <>
      {/* Laptop/PC Navbar */}
      <nav className="hidden py-5 px-10 lg:text-2xl bg-gray-300 lg:flex justify-between lg:pr-36">
        <Link to="/">
          <h1>Mohsin Nawaz</h1>
        </Link>
        <div className="flex items-center">
          <Link to="/">
            <h4 className="mr-3">EcommerceX</h4>
          </Link>
          <Link to="/cart">
            <FaShoppingCart className="cursor-pointer" />
          </Link>
          <sub className="cart-items" ref={cartItems}>
            {cartQty}
          </sub>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex items-center justify-between px-5 lg:hidden">
        <h1 className="text-xl font-semibold ">Ecommerce X</h1>
        <div
          className="text-3xl hover:cursor-pointer flex gap-4"
          ref={menu}
          onClick={handleClick}
        >
          {count === false ? (
            <BiMenu
              style={{
                transition: "all 2s ease-in",
              }}
            />
          ) : (
            <CgClose style={{ transition: "all 2s ease-in" }} />
          )}
          <div className="flex">
            <FaShoppingCart className="w-[60%] " />
            <sub className="cart-items text-md" ref={cartItems}>
              {State.Total}
            </sub>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
