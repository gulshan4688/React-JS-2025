import React from 'react'
import { createContext } from 'react'

export let ThemeDataContext = createContext();    // 1. context created and now export it

const ThemeContext = (props) => {

      // here we provided the context
      // then go to app u want to use context and then use there like const data = usecontext(ThemeDataContext) and every thing 
      // themeDatacontext has or provides u will get it stored in the data 

      let arr = [1,2,3,4, 'sarthak'];


  return (
    <div>
      <ThemeDataContext.Provider value={arr} >    
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext
