
import { useEffect, useState } from 'react'

export default function Demo() {

    const [counter, setCounter] = useState<number>(0);
    const [age, setAge] = useState<number>(30);

    useEffect(() => {
            console.log('Use effect 1');
            // 1. при первом рендере компонента
        }, []);

    useEffect(() => {
        console.log('Use effect 2 без массива зависимостей');
        // 2. при любом изменении
    });
    
    useEffect(() => {
        console.log('Use effect 3 ');
        // 3. при изменении состояния age
    }, [age]);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Click");
        }, 6000);
        
        // 4. делаем функцию очистки в момент закрытия компонента
        return () => {
            clearInterval(interval);
        };
    }, []);

    // Mount, Update, Unmount -> этапы существования компонента
  
  return (
    <div>
        <h2>Use Effect</h2>        
        <p>{counter}</p>
        <p>{age}</p>
        <button onClick={() => setCounter((prev) => prev + 1)}>+1 Counter</button>
        <button onClick={() => setAge((prev) => prev + 1)}>+1 Age</button>
        <ul>
            <li>Для фетчинга данных</li>
            <li>Для таймеров</li>
            <li>Для статических данных - маркетинг или аналитика</li>
        </ul>
    </div>
  )
}
