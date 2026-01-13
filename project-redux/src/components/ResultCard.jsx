import React from 'react'

const ResultCard = ({ item }) => {
  return (
    <div className='bg-gray-50 w-[18vw] h-80 rounded' >
      <div className='  '>
        {item.type === 'photos' ? <img className='w-full h-full object-cover object-center ' src={item.src} alt="alt-Text" /> : ' '}
        {item.type === 'videos' ? <video className='w-full h-full object-cover object-center ' muted autoPlay loop src={item.src} alt="alt-Text" /> : ' '}
      </div>
      <h1 className='text-black' >{item.title}</h1>
    </div>
  )
}

export default ResultCard
