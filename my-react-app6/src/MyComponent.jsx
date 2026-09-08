import { useState } from "react";

function MyComponent() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const updateName = () => {
        setName("Sulaim");
    }
    const increment = () => {
        setAge(age + 1)
    }
    return(
        <>
        <p>Name: {name}</p>
        <button onClick={updateName}>SetName</button>
        <p>Age: {age}</p>
        <button onClick={increment}>Increment</button>
        </>
    )
}
export default MyComponent