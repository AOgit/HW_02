import { useContext } from "react"
import { CounterContext } from "../context/CounterContext";

export const useCurrentCounter = () => {
    const context = useContext(CounterContext);
    if(!context) {
        throw new Error ("useCounter must be use within AuthProvider");
    }
    return context;
}