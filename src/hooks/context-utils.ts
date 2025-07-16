import { createContext, useContext } from "react";

export const createSafeContext = <T>() => {
  const Context = createContext<T | undefined>(undefined);

  const useSafeContext = (): T => {
    const context = useContext(Context);
    if (!context) {
      throw new Error('useSafeContext must be used within its Provider');
    }
    return context;
  };

  return [Context, useSafeContext] as const;
};