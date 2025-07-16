import { useState, type ReactNode } from "react";
import { CounterContext } from "../context/CounterContext";


export const CounterProvider = ({children}: {children: ReactNode}) => {
    const [counter, setCounter] = useState<number>(0);
    
    return (
        <CounterContext.Provider value={{counter, setCounter}}>
        {children}
        </CounterContext.Provider>
    )
}