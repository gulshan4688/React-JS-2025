import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState({user:'sarthak', age : 20});
  const [num2, setNum2] = useState(['mani',24]);

  const btnClicked = ()=>{
    const nextNum = {...num};  // destructring 
    console.log(nextNum);
    // since we have destructured the object now we can change them 
    nextNum.user = 'mani';
    nextNum.age = 23;
    setNum(nextNum);
  }
  const btnClickedArr = ()=>{
    const nextNum = [...num2];  // destructring 
    console.log(nextNum);
    // since we have destructured the object now we can change them 
    nextNum[0] = 'mani kumar';
    nextNum[1] = 22;
    setNum2(nextNum);
  }

  return (
    <div>
      <h1>Name and Value are : {num2[0]} and {num2[1]} </h1>
      <button onClick={btnClickedArr} >Click</button>
    </div>
  )
}

export default App
