import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react';

const App = () => {

  const [theme, setTheme] = useState('light');

  return (
    <div>
      <Navbar theme={theme}>
        <h4>This is children 1</h4>
        <h4>This is children 2</h4>
      </Navbar>
      
    </div>
  )
}

export default App
