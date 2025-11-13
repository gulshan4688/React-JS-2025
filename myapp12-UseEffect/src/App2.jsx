import React, { useEffect, useState } from 'react'

const App2 = () => {

    const [num, setNum] = useState(100);

    function increase() {
        console.log("Increasing");
    }
    function decrease() {
        console.log("Decreasing");
    }
    useEffect(()=>{
        increase();
        // decrease();
    },[num]);

    return (
        <div className='parent' >
            <h1>{num}</h1>
            <button  onClick={() => {
                setNum(num + 1);
            }}  >INCREASE</button>
            <button onClick={() => {
                setNum(num - 1);
            }} >DECREASE</button>
        </div>
    )
}

export default App2
