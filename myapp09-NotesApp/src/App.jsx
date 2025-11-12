import React, { useState } from 'react'
import Notes from './components/Notes';

const App = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, description);
    let newArr = [...notes];
    newArr.push({ title, description });
    console.log(newArr);
    setNotes(newArr);
    setTitle('');
    setDescription('');

  }
  return (
    <div className='min-h-screen bg-gray-800 text-gray-300 ' >
      <form className='flex p-10 flex-col gap-4'
        onSubmit={submitHandler}>
        <input
          type="text"
          placeholder='enter Heading'
          className='px-5 py-2 border-2 rounded outline-none '
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder='enter Details'
          className='px-5 py-2 border-2 h-40 rounded outline-none '
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button
          className='bg-gray-400 px-5 py-2 text-black outline-none' >Add Note</button>
      </form>

      {
        notes.length == 0 ? <h1 className='font-bold text-3xl pl-7 mt-9 ' >No Recent Notes </h1> : <Notes notes={notes}
          setNotes={setNotes} />
      }

    </div>
  )
}

export default App
