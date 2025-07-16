import style from "./Counter.module.css";
import { useCurrentCounter } from "../../hooks/userCurrentCounter";

export const Counter = () => {
  
const {counter, increment, decrement, reset} = useCurrentCounter(10);

  // tuple - кортеж
  // state, local state - состояние
  // setter function - функция сеттер

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button type="button" onClick={decrement} className={style.decr}>
        -1
      </button>
      <button type="button" onClick={reset} className={style.reset}>
        Reset
      </button>
      <button type="button" onClick={increment} className={style.inc}>
        +1
      </button>
    </div>
  );
};
