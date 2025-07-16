import { createContext } from "react";


interface CounterContextType {
    counter: number | undefined;
    setCounter: React.Dispatch<React.SetStateAction<number>>; // взяли тип из подсказки useState(counter, setCounter)
}
export const CounterContext = createContext<CounterContextType | undefined>(undefined);
