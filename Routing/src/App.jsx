import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
