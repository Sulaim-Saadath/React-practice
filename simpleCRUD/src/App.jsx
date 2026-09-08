import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const handleInput = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "price":
        setPrice(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const product = {
        name: name,
        price: price,
      };
      const response = await fetch("http://localhost:8080/api/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        throw new Error("Failed to add product");
      }
      setName("");
      setPrice("");
    } catch (error) {
      setError(error.message);
    }
  };

  async function getAllProducts() {
    try {
      setLoading(true);
      setError("");
      const response = await fetch("http://localhost:8080/api/getAllProducts");
      if (!response.ok) {
        throw new Error("Failed to get products");
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleInput}
          required
        />
        <label htmlFor="price">Enter Price: </label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={handleInput}
          required
        />
        <button type="submit">ADD PRODUCT</button>
      </form>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error: {error}</h1>
      ) : (
        product.map((product) => (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
          </div>
        ))
      )}
    </>
  );
};

export default App;
