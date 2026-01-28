import React from 'react'

const ResultCard = ({ item }) => {
  return (
    <div className='bg-gray-50 w-[18vw] h-80 rounded  relative' >
      <div className='h-full'>
        <a target='_blank' className='h-full'  href={item.url}></a>
        {item.type === 'photos' ? <img className='w-full h-full object-cover object-center ' src={item.src} alt="alt-Text" /> : ' '}
        {item.type === 'videos' ? <video className='w-full h-full object-cover object-center ' muted autoPlay loop src={item.src} alt="alt-Text" /> : ' '}
      </div>
      <div id='bottom' className='h-[29%] w-full p-4 absolute bottom-0 text-white ' >
        <h2 className=' font-semibold capitalize ' >{item.title}</h2>
        <button className='bg-yellow-500 text-white rounded px-4 py-1 font-medium cursor-pointer ' >save</button>
      </div>
    </div>
  )
}

export default ResultCard
