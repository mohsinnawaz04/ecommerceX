// Sample array of objects
let arrayOfObjects = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];

// Name of the object to remove
let objectNameToRemove = "Alice";

// Find the index of the object with the specified name
let indexToRemove = arrayOfObjects.findIndex(
  (obj) => obj.name === objectNameToRemove
);

// If the object exists in the array, remove it
if (indexToRemove !== -1) {
  arrayOfObjects.splice(indexToRemove, 1);
}

// Now arrayOfObjects does not contain the object with name 'Alice'
console.log(arrayOfObjects);

const removeItems = (id) => {
  let indexToRemove = cartItems.findIndex((obj) => obj.name === id);

  if (indexToRemove !== -1) {
    cartItems.splice(indexToRemove, 1);
  }
};

// FetchCartItems Code Base

const getAllProduct = () => {
  // setfilterProducts(state.cartItemsTotal);
  // const result = filterProducts.map((obj) => {
  //   const values = Object.values(obj);
  //   return values;
  // });
  // const filteredArray = result.flat();
  // setArr2(filteredArray);
  // console.log(filteredArray);
  // const res = await fetch("https://dummyjson.com/products?limit=100");
  // const data = awnait res.json();
  // let productsArr = data.products;
  // productsArr = productsArr.filter((obj) =>
  //   products.includes(obj.id.toString())
  // );
  // console.log("Filtered Out => ", productsArr);
  // setfilterProducts(productsArr);
  // console.log("total items", state.cartItemsTotal);
  // let ids = Object.keys(filterProducts);
  // let mapped = filterProducts.map((obj) => obj);
  // console.log("sd", filterProducts);
  // let mapped2 = mapped.map((id) =>);
  // let mapped2 = mapped.map((obj) => filterProducts[obj]);
  // console.log("mapped items", mapped);
};

{
  /* {filterProducts.length > 0 ? (
        filterProducts?.map((product, i) => (
          <div
            className="flex px-4 py-5 w-[50rem] justify-between border mx-auto"
            key={i}
          >
            <div className="flex gap-10 justify-center items-center">
              <img
                src={product.image}
                alt="product image"
                width="70px"
                className="object-cover rounded-sm"
              />
              <h1>{product.title}</h1>
            </div>
            <div className="mr-5 flex items-center">
              <span
                className="remove bg-slate-300 py-2 px-4 rounded rounded-r-none cursor-pointer hover:bg-slate-400"
                // onClick={quantity}
              >
                -
              </span>
              <input
                type="text"
                id="qtyButton1"
                className="bg-slate-200 py-2 px-5 text-center w-16"
              />
              <span
                className="add bg-slate-300 py-2 px-4 rounded rounded-l-none cursor-pointer hover:bg-slate-400"
                // onClick={quantity}
              >
                +
              </span>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center mt-10">
          <LoadMore text="Loading" />
        </div>
      )} */
}
