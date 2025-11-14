import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeDataContext } from './context/ThemeContext';

const App = () => {

  const [theme, setTheme] = useState('light');

  const data =useContext(ThemeDataContext);
  console.log(data);

  return (
    <div>
      <Navbar theme={theme}>
        <h4>This is children 1</h4>
        <h4>{data}</h4>
        <h4>This is children 2</h4>
      </Navbar>

    </div>
  )
}

export default App
