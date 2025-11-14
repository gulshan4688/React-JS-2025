import React from 'react'
import Nav2 from './Nav2'

const Navbar = (props) => {

  console.log(props);

  return (
    <div className='nav' >
      <h1>Sheryians</h1>
      {props.children[0]}
      {props.children[1]}
      <Nav2 theme={props.theme} />
    </div>
  )
}

export default Navbar
