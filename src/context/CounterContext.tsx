import { createContext } from "react";
import type { CounterContextType } from "../types";

export const CounterContext = createContext<CounterContextType | undefined>(undefined);
