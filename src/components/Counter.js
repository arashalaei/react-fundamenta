import { useState } from "react";

const Counter = (props) => {

    const [counter, changeCounter] = useState(0);
    const [color, changeColor] = useState('red');


    const increment = () => {
        changeCounter(counter + 1);
    }

    const decrease = () => {
        changeCounter(counter - 1);
    }

    return(
        <>
            <h1>{props.name}</h1>
            <div style={{fontSize: '30px', backgroundColor: color}} >{counter}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrease}>-</button>
            <button></button>
        </>
    )
}

export default Counter;
