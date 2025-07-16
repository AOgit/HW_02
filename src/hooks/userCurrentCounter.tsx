import { useContext, useEffect } from "react"
import { CounterContext } from "../context/CounterContext";

export const useCurrentCounter = (start: number = 0) => {
    const context = useContext(CounterContext);
    if(!context) {
        throw new Error ("useCounter must be use within AuthProvider");
    }
    const {setCounter, counter} = context;
    
    useEffect(() => {
        setCounter(start);
    }, [setCounter, start])

    function increment() {
        setCounter((prev) => prev + 1);
    }
    function decrement() {
        setCounter((prev) => prev - 1);
    }
    function reset() {
        setCounter(0);
    }
    return {counter, increment, decrement, reset}
}