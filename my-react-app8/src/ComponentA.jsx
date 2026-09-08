import { useState } from "react"
import ComponentB from "./ComponentB.jsx"
import { createContext } from "react"

export  const MyContext = createContext();
function ComponentA() {
    const [name, setName] = useState("Sulaim")
    return (
        <div className="box">
            <h1>Hello {name}</h1>
            <MyContext value={name}>
                <ComponentB user={name}/>
            </MyContext>

        </div>
    )
}

export default ComponentA