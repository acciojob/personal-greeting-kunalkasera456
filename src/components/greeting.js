import react, { useState } from "react";


const Greeting = ()=> {
    const[name, setName] = useState("");

    const handleInput = (e)=> {
        setName(e.target.value);
    }

    return(
        <div>
            <label>Enter your name:</label>
            <br></br>
            <input type="text" onChange={handleInput} value={name}></input>
            {name != "" ? <p>Hello {name}!</p> : "" }
        </div>
    )
}

export default Greeting;