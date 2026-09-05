import React, { useEffect, useState } from 'react'

const App3 = () => {
    const [count, setCount] = useState(0)
    const [counter, setCounter] = useState(0)
    const handleCount = () => {
        setCount(count + 1)
    }
    
    const handleCounter = () => {
        setCounter(counter + 1)
    }
    useEffect(() => {
        console.log("Button Clicked" + count);
    }, [count])
        useEffect(() => {
        console.log("Another Button Clicked" + counter);
    }, [counter])
    
  return (
    <>
    <h1>Counter: {count}</h1>
    <button onClick={handleCount}>Increment</button>
        <h1>Another Counter: {counter}</h1>
    <button onClick={handleCounter}>Increment</button>
    </>
    )
}

export default App3
