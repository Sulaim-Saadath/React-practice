import React, { useEffect, useState } from 'react'

const App4 = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
      const timer = setInterval(() => {
    setSeconds(seconds + 1);
  }, 1000);
  return () => {
    console.log("Inside log");
    clearInterval(timer)
  };
  }, [seconds]);
  return (
    <>
    <h1>Seconds: {seconds}</h1>
    </>
  )
}

export default App4
