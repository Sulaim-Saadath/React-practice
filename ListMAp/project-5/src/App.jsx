import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return(
   <>
   <label htmlFor="name">Enter Name</label>
   <input type="text" id="name" value={name} onChange={(event1) => {setName(event1.target.value)}} />
   <label htmlFor="email">Enter Email</label>
   <input type="email" id="email" value={email} onChange={(event2) => {setEmail(event2.target.value)}} />
   <h2>{name}</h2>
   <h2>{email}</h2>
   </>
  );
}

export default App;
