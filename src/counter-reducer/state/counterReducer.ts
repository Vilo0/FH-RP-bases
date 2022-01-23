import { CounterAction } from '../actions/actions';
import { CounterState } from '../interfaces/interfaces';

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
    const { counter, changes } = state;

    switch (action.type) {
        case 'increaseBy':
            return {
                // ...state,
                counter: counter + action.payload.value,
                changes: changes + 1,
                previous: counter,
            };
        case 'reset':
            return {
                counter: 0,
                changes: 0,
                previous: 0, 
            };
        default:
            return state;
    }
};