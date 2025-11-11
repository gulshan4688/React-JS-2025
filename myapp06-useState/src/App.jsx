import React, { useState } from 'react'
import Counter from './Counter';

const App = () => {
  let a = 20;
  const increase=()=>{
    a = a*10;
    console.log(a);
    return a;
  }
  
  const [num, setNum] = useState(20);
  const [userName, setUserName] = useState('mani')
  const changeNum=()=>{
    setNum(num * 10);
  }
  const changeName=()=>{
    setUserName(userName + 'Kumar');
  }
  
  return (
    <div>
      <h1>Value of a is {num}</h1>
      <h1>User Name is {userName}</h1>
      <button onClick={()=>{
        changeName();
        changeNum();
      }} >Click</button>
      <Counter/>
    </div>
  )
}

export default App
