import React from "react";
import { useState } from "react";

//displays error message in case no matching recipes could be found
//also utilizes the useState functionality to fulfill that requirement
const Error_message = () =>{
    const [count, setCount] = useState(0);
    return <div>
        <h1>"Sorry no matching Cocktails could be found. Return to Home and start over or choose the option to buy the ingredients"</h1>
        <button onClick={() => setCount(count + 1)}>Here is a Button to click in case you are bored</button>
        <div>Important Counter: {count}</div>
        </div>
}
export default Error_message;