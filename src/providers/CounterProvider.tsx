import { useState, type ReactNode } from "react";
import { CounterContext } from "../context/CounterContext";


export const CounterProvider = ({children}: {children: ReactNode}) => {
    const [counter, setGlobalCounter] = useState<number>();
    
    return (
        <CounterContext.Provider value={{counter, setGlobalCounter}}>
        {children}
        </CounterContext.Provider>
    )
}