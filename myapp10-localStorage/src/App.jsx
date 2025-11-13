import React from 'react'

const App = () => {

  localStorage.setItem('user', 'mani');     // to store item in localstorage
  console.log(localStorage.getItem('user')); // to print or read item in localstorage
  localStorage.removeItem('user');       // // to remove or delete item in localstorage
  
  const arr = [
    {
      name: 'mani',
      age:15,
    },
    {
      name: 'kavvy',
      age:23
    }
  ]
  localStorage.setItem('userArr',JSON.stringify(arr));
  console.log(JSON.stringify(arr));  // prints [{"name":"mani","age":15},{"name":"kavvy","age":23}]
  console.log(JSON.parse(JSON.stringify(arr)));  // prints [object Object],[object Object]
  // that means from object to string Json.stringify and string to object use json.parse

  
  return (
    <div>
      <h1>Local Storage</h1>
    </div>
  )
}

export default App
