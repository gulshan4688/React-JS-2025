import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Nav2 = (props) => {

  const service = useContext(ThemeDataContext);

  return (
    <div className='nav2' >
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>{service}</h4>
        <h4>{props.theme}</h4> 
    </div>
  )
}

export default Nav2
