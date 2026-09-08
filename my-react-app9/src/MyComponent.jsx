import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function MyComponent() {
    const [number, setNumber] = useState(0);
     useEffect(()=>{
        console.log("Component redred")
    })
    const handleClick = () => {
        setNumber(number+1)
    }
    return(<>
    <button onClick={handleClick}>Click me</button>
    </>)
}
export default MyComponent;