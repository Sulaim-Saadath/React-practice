import React from "react";
import Product from "./Product";

const App = () => {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 30000 },
    { id: 3, name: "Watch", price: 10000 },
  ];
  return(
    <div>
      <ul>
        {products.map((product)=>(
          <li><Product key={product.id} name={product.name} price={product.price}/></li>
        ))};
      </ul>
    </div>
  );
};

export default App;
