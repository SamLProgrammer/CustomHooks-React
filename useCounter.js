import { useState } from "react";

export const useCounter = (initialValue = 0) => {
    const [counter, setcounter] = useState(initialValue);
    
    const increment = (value = 1) => {
        setcounter((c) => (c+value));
    }

    const decrement = (value = 1) => {
        setcounter((c) => (c-value));
    }

    const reset = () => {
        setcounter((c) => (initialValue));
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}