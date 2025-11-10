import React from 'react'
import Card from './components/Card'

const App = () => {

  return (
    <>
      <div className='parent' >
        <Card user='mani' />
        <Card user = 'yoyo' />
        <Card user='juto'/>
      </div>

    </>
  )
}

export default App;
