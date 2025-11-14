import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 items-center bg-cyan-900 justify-between'>
      <h2 className='text-xl font-bold'>Sheryians</h2>
      <div className='flex gap-8 '>
        <Link className='text-lg font-bold' to="/">Home</Link>
        <Link className='text-lg font-bold' to="/about">About</Link>
        <Link className='text-lg font-bold' to="/product">Product</Link>
        <Link className='text-lg font-bold' to="/courses">Courses</Link>
      </div>
    </div>
  )
}

export default Navbar
