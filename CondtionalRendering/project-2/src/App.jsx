import React from "react";
import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogIn = () => {
    setIsLoggedIn(true);
  };
  const handleLogOut = () => {
    setIsLoggedIn(false);
  };
  const handleDeleteAccount = () => {
    console.log("Deleted Account");
  };
  return (
    <>
      {isLoggedIn && (
        <>
          <h1>Welcome Saadath</h1>
          <button onClick={handleLogOut}>Logout</button>
        </>
      )}
      {!isLoggedIn && (
        <>
          <h1>Please Login</h1>
          <button onClick={handleLogIn}>Login</button>
        </>
      )}
      {isLoggedIn && (
        <>
          <h1>Delete Account</h1>
          <button onClick={handleDeleteAccount}>Delete</button>
        </>
      )}
    </>
  );
  // return (
  //   <>
  //   {isLoggedIn ?(<><h1>Welcome Saadath</h1><button onClick={handleLogOut}>Logout</button></>):(<><h1>Please Login</h1><button onClick={handleLogIn}>LogIn</button></>)}
  //   </>
  // );
};

export default App;
