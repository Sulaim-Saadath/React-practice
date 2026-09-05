// import Intro from "./component/Intro";

import { useState } from "react";
import { About } from "./component/About";
import Product from "./component/Product";
import { Skills } from "./component/Skills";

function App(){
  const [count, setCount] = useState(0);
  const handleIncerement = () => {
    setCount(count + 1);
  }
  const handleDecrement = () => {
    if(count > 0) {
      setCount(count - 1);
    }
  }
  const handleReset = () => {
    setCount(0);
  }
  return(
    <>
    <h1>Counter: {count}</h1>
    <button onClick={handleIncerement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleReset}>Reset</button>
    </>
  );
}
export default App;
{/* <div className="App">
  <Product
  name="Laptop"
  price={50000}
  color="Black"
  inStock={true}
  />
  
  <Product
name="Phone"
price={30000}
color="Blue"
inStock={false}
/>
  </div> */}
  {/* <div>
    <button type="submit" onClick={handleClick}>Say Hello</button>
  </div>
  <div>
  <button onClick={() => handleAddToCart("Laptop")}>Add Laptop Cart</button>
  <button onClick={() => handleAddToCart("Phone")}>Add Phone Cart</button>
  </div> */}
  // let name = "Sulaim"
  // const handleClick = () => {
  //   console.log("Hello " + name)
  // }
  // const handleAddToCart = (productName) => {
  //   console.log("Product Name " + productName + " Added to cart");
  // }