import React from "react";
import { useState } from "react";
import Search from "./Search";
import ProductList from "./ProductList";

const App1 = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <h1>{search}</h1>
      <Search search={search} setSearch = {setSearch}/>
      <ProductList search={search}/>
    </>
  );
};

export default App1;
