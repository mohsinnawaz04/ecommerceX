import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Products from "./Pages/Products/Products.jsx";
// import RootLayout from "./layout/RootLayout.jsx";
import CartItems from "./context/CartContext/CartItems.jsx";
import CartItemsTotal from "./Components/CartItemsTotal.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/products",
//     element: <Products />,
//     children: [
//       {
//         path: ":id",
//         element: <Products />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "",
    element: <CartItems />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/products",
        element: <Products />,
        children: [
          {
            path: ":id",
            element: <Products />,
          },
        ],
      },
      {
        path: "/cart",
        element: <CartItemsTotal />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
