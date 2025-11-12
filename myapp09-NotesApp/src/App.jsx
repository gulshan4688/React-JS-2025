import React, { useState } from 'react'

const App = () => {

  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  const [notes, setNotes] = useState([{}]);
  const submitHandler=(e)=>{
    e.preventDefault();

  }
  return (
    <div className='h-screen bg-gray-800 text-gray-300 ' >
      <form className='flex p-10 flex-col gap-4' > 
        <input
          type="text"
          placeholder='enter Heading'
          className='px-5 py-2 border-2 rounded outline-none '
          value={notes.title}
          onChange={()=>{

          }}
        />
        <input
          type="text"
          placeholder='enter Details'
          className='px-5 py-2 border-2 h-40 rounded outline-none '
          value={notes.descriptoin}
          onChange={(e)=>{
            console.log(e.target.value);
            setNotes(notes.descriptoin);
            
          }}
        />
        <button 
         className='bg-gray-400 px-5 py-2 text-black outline-none  '
         >Add Note</button>
      </form>
    </div>
  )
}

export default App
