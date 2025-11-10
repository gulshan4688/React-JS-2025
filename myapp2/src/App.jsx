import React from 'react'
import Card from './components/Card'

const App = () => {

  return (
    <>
      <div className='parent' >
        <Card user='mani' age = {18} imgAdd = 'https://plus.unsplash.com/premium_photo-1675249003484-38931863d9bf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600' />
        <Card user = 'yoyo' age = {19} imgAdd='https://plus.unsplash.com/premium_photo-1675249003499-0570ce14c7b4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8M2QlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600' />
        <Card user='juto' age={23}  imgAdd='https://images.unsplash.com/photo-1693252258249-5ef8b8b1a0ed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fDNkJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600' />
      </div>

    </>
  )
}

export default App;
