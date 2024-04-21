import React from "react";
const SingleProduct = ({ title, desc, id, image, price }) => {
  return (
    <div key={id}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        referrerPolicy="no-referrer"
      />
      <div className="w-full h-screen flex justify-center items-center lg:items-start py-24">
        <div>
          <div className="w-[80%] mx-auto lg:w-[30rem]">
            <div className="shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group">
              <div className="overflow-hidden relative">
                <img
                  className="w-full transition duration-700 ease-in-out group-hover:opacity-80 object-cover rounded"
                  src={image}
                  alt="image"
                />
              </div>
              <div className="px-4 py-3 bg-white">
                <h1 className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">
                  {title}
                </h1>

                <p>{desc}</p>

                <div className="flex py-2">
                  <p className="mr-2 text-md text-gray-600">PRICE: {price}$</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
