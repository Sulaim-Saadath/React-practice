import React from "react";
import { useState } from "react";
import Child from "./Child";

const App = () => {
  const [message, setMessage] = useState("");
  const recieveMessage = (data) => {
    setMessage(data);
  };
  return( 
  <>
  <h1>{message}</h1>
  <Child sendMessage={recieveMessage}/>
  </>
  );
};

export default App;
