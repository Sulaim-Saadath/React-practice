import React from "react";

const App = () => {
  const products = [
    {id:1, name: "Laptop", price: 50000},
    {id:2, name: "phone", price: 30000},
    {id:3, name:"watch", price: 10000}
  ]
  return(
    <>
   <ul>
    {products.map((product)=> (
      <li key={product.id}><h1>{product.id}-{product.name}-{product.price}</h1></li>
    ))}
    </ul>
    </>
  );
};

export default App;
