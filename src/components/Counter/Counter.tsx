import {useState } from "react";
import style from "./Counter.module.css";
import { useCurrentCounter } from "../../hooks/userCurrentCounter";

export const Counter = () => {
  
  const initialValue = 0;
  const [counter, setCounter] = useState<number>(initialValue);
  const {setGlobalCounter} = useCurrentCounter();
  // tuple - кортеж
  // state, local state - состояние
  // setter function - функция сеттер

  const handlePlus = () => {setCounter((prev) => {
    setGlobalCounter(prev + 1); 
    return prev + 1;
  }
  )};
  const handleMinus = () => {
    setCounter((prev) => {
      setGlobalCounter(prev - 1);
      return prev - 1;
    }
    )};

  const handleReset = () => {
    setCounter(0)
    setGlobalCounter(0)
  };

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button type="button" onClick={handleMinus} className={style.decr}>
        -1
      </button>
      <button type="button" onClick={handleReset} className={style.reset}>
        Reset
      </button>
      <button type="button" onClick={handlePlus} className={style.inc}>
        +1
      </button>
    </div>
  );
};
