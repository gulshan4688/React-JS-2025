import React from 'react'
import { fetchPhotos } from './api/mediaApi'

const App = () => {

  function getPhotos(){
    fetchPhotos();
  }

  return (
    <div className='w-full h-screen bg-gray-750 ' >
      <h2 className=' ' >App</h2>
      <button onClick={()=>fetchPhotos('cat')} >Fetch Photos</button>
    </div> 
  )
}

export default App
