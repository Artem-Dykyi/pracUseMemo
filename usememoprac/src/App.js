// import logo from './logo.svg';
import './App.css';
import { useState, useMemo, useCallback } from "react";

function App() {
  const [number, setNumber] = useState(0)

  // useMemo запам'ятовує результат, і записує його в масив - кешує а потім дивиться чи є таке значення якщо є то заберає якщо нема обраховує і оновлює рендер 
  const addNumber = useMemo(()=>{
    return number * 3
  }, [number]) 
     
  const minesNumber = useMemo(()=>{
    return number - 2
  }, [number]) 

  //useCallback запам'ятовує всю функцію і дивиться чи вже використовувалась якщо так то просто бере і не оновлює


  const resulFunck = useCallback(()=> {
    return addNumber + minesNumber
  }, [addNumber, minesNumber])

  return (
    <div className="App"> 
      <div className="box">
        <button onClick={()=>setNumber(number + 1)}>+1</button>
        <p>{number}</p>
        <button onClick={()=>setNumber(number - 1)}>-1</button>
      </div>

      <p>addNumber = {addNumber}</p>
      <p>minesNumber = {minesNumber}</p>

      <p>result (addNumber + minesNumber) = {resulFunck()}</p>
    </div>
  );
}

export default App;
