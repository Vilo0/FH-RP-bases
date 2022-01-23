import { useReducer } from 'react';

interface CounterState {
    counter: number;
    previous: number;
    changes: number;
}

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
};

export const CounterReducerComponent = () => {

    const [state, dispatch] = useReducer(first, INITIAL_STATE);

    const handleClick = () => {
        setCounter(counter => counter + 1);
    }

    return(
        <>
            <h1>Counter Reducer: { counter }</h1>

            <button 
                className="btn btn-primary"
                onClick={ handleClick }
            >
                +1
            </button>
        </>
    );
};
