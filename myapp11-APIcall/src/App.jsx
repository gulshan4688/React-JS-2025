import React from 'react'
import axios from 'axios'
import Temp from './Temp';
import { useState } from 'react';

const App = () => {

  const [responseArr, setResponseArr] = useState([]);
  // fucntion for api call 
  // function getData() {
  //   const data = fetch('https://jsonplaceholder.typicode.com/todos/1');
  //   console.log(data);
  // }
  async function getDataAsync() {
    const asyncData = await fetch('https://jsonplaceholder.typicode.com/todos');
    const awaitedData = await asyncData.json();
    // const copyData = [...awaitedData];
    setResponseArr(awaitedData);    
  }

  // const usingAxios = async  () => {
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/todos') ;
  //   console.log(response.data);
  // }

  return (
    <div>
      <h1>API CALL</h1>
      
      {/* <button onClick={getData} >Make a call</button> */}
      <button onClick={getDataAsync} >Make a AYSNC call</button>
      {/* <button onClick={usingAxios}  >Using Axios</button> */}
      <Temp response={responseArr} />
    </div>
  )
}

export default App
