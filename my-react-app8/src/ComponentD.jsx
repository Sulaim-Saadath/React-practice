import { useContext } from "react"
import { MyContext } from "./ComponentA"
import { use } from "react"

function ComponentD() {
    const user = useContext(MyContext)
    return (
        <div className="box">
            <h1>ComponentD</h1>
            <p>Bye {user}</p>
        </div>
    )
}

export default ComponentD