import React, { useState } from 'react'

const Counter = () => {
    const [num, setNum] = useState(0);
    const increase =()=>{
        setNum(num+1);
    }
    const decrease =()=>{
        setNum(num-1);
    }
  return (
    <div>
      <h1>Value : {num}</h1>
      <button className='btn' onClick={increase} >Increase</button>
      <button className='btn' onClick={decrease} >Decrease</button>
    </div>
  )
}

export default Counter
