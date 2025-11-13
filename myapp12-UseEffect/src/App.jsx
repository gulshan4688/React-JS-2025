import React, { useEffect, useState } from 'react'
import App2 from './App2';

const App = () => {

  const [num, setNum] = useState(2);
  const [num2, setNum2] = useState(2);

  useEffect(() => {
    console.log("use effect is running ");
  }, [num2])

  return (
    <div>
      <h1>num: {num}</h1>
      <button onClick={() => {
          setNum(num + 1);
      }} >click</button>
      <h1>num2 : {num2}</h1>
      <button onClick={() => {
          setNum2(num2 + 1);
      }}>click_2</button>

      <App2 />
    </div>
  )
}

export default App
