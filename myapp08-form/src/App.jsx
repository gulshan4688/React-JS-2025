import React from 'react'
import { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('');

  const sbmtHandlers =(e)=>{    // this is only for submit button on sumit btn we have to print the data and empty the input box 
    e.preventDefault();
    console.log('clicked -- ', title);
    setTitle('');                  // empty the input box 
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        sbmtHandlers(e);
      }}>
        <input className='inp' 
               type="text" 
               placeholder='enter your name'
               value={title}
               onChange={(e)=>{
                setTitle(e.target.value);
                // setTitle('');
               }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
