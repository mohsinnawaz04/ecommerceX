import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard";
import SingleProduct from "../../Components/SingleProduct";

const Products = () => {
  const [product, setProduct] = useState([]);
  const param = useParams();

  useEffect(() => {
    getSingleProduct();
  }, []);

  const getSingleProduct = async () => {
    const dataArray = [];

    try {
      const res = await fetch(`https://dummyjson.com/products/${param.id}`);
      const data = await res.json();
      dataArray.push(data);
      setProduct(dataArray);
      // console.log(product);
    } catch (error) {
      console.log("ERROR 101", error);
    }
  };
  return (
    <div>
      {product?.map((prod) => {
        return (
          <>
            {/* <div key={i}>
              <img src={prod.thumbnail} alt="" />
              <h1>{prod.brand}</h1>
              <h1>{prod.description}</h1>
            </div> */}

            <SingleProduct
              id={prod.id}
              title={prod.brand}
              desc={prod.description}
              image={prod.thumbnail}
              price={prod.price}
            />
          </>
        );
      })}
    </div>
  );
};

export default Products;
