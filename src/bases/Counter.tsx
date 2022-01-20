import { useState } from "react";

export const Counter = ({ initialValue = 0 }) => {

    const [counter, setCounter] = useState(initialValue);

    const handleClick = () => {
        setCounter(counter => counter + 1);
    }

    return(
        <>
            <h1>Counter: { counter }</h1>

            <button 
                className="btn btn-primary"
                onClick={ handleClick }
            >
                +1
            </button>
        </>
    );
};
