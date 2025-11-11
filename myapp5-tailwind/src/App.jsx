import React from 'react'

const App = () => {
  function writes(){
    console.log("writing");
  }
  const changing =(val)=>{
    console.log(val.target.value);
  }
  
  return (
    <div className='bg-gray-400 h-screen w-full '  >
      <button onClick={writes}  className='bg-red-400' > Apply </button>
      <input className='p-1 bg-yellow-50 m-2 ' onChange={changing}  type="text" />
    </div>
  )
}

export default App
