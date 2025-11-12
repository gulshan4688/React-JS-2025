✅ What you wrote:
<input onChange={changing} type="text" />
and
const changing = (val) => {
  console.log(val.target.value);
};
🔍 What really happens under the hood
When you use an event handler like onChange, React automatically calls your function with an event object.
That means React actually runs something like:
changing(event);


You didn’t manually pass event, but React does it behind the scenes for every event listener (onClick, onChange, onInput, etc).

🧠 Example explanation
As you type:

React triggers an internal event for every character typed.

It automatically passes that event object to your handler.

Inside your handler, val.target refers to the <input> element.

So val.target.value gives you the current text in the input box.

🧩 Analogy

Think of it like:

<button.addEventListener("click", (event) => {...});


## HOOKs 

![alt text](image.png)

# useState - 
  this hook is used to change the state of any thing like no of followers (pehle 26 the aur ab 27 ho gaye to yaha ek state se durse state me change aya ) this is called state changed (or any input box is empty and we wrote our name there then that is also called state changed ) 

# useEffect - 
  this hook is used when we need to perform a task separetly from the main website or whole website 

# useRef - 
  whenever we need to select any element like we used to do in JS doc.queryselector('h1') like this but as now we are using ReactJS so now it will be done by useRef , we just need the reference of any thing we want to select 

# useContext -
  while passing data if App calls an component1 and component1 calls component2 then that data cant we directly passed through App to component2 so we need to use useContext , its  a type of collection that stores all the global data so we can pick from any spot without worrying about the heirarchy of the components.

# useReducer - 
  used to manager complex global useStates 

# useMemo and useCallbacks - 
  used to optimize the website and avoid unncessory re-rendering like , the components will re-render at only when new data is coming or something related to that is actually changing 


        ! ----------------USE STATE---------------!
  
Here 
  const [num, setNum] = useState(20);
      this    this          here is the bracket in which we initialse the value 
      num     value
      is      write 
      read    only 
      only    we can 
      means   do 
      we can  changes
      only    to this 
      print 
      it 
  
  # this is how we change the values 
                                    
                  const [num, setNum] = useState(20);  // define the num and initialse it 
                  const changeNum=()=>{                 // create a function that will be called in the tags on chnage or click 
                    setNum(num * 10);                   // change whatever value to , u want 
                  }
  
  # how to call two eventHandlers in one tag 
                    const [num, setNum] = useState(20);
                    const [userName, setUserName] = useState('mani');

                    <const changeNum=()=>{
                      setNum(num * 10);
                    }

                    const changeName=()=>{
                      setUserName(userName + ' Kumar');
                    }

                    return (
                      <div>
                        <h1>Value of a is {num}</h1>
                        <h1>User Name is {userName}</h1>

#                        <button onClick={()=>{   // ek hi onClick method me sare eventHandlers daal do 
#                         changeName();
#                         changeNum();
#                       }} >Click</button>
#                     </div>
                    )


!=-------------- Use of UseState in Counter App--------------------!

import React, { useState } from 'react'

const Counter = () => {
    const [num, setNum] = useState(0);
#    const increase =()=>{
        setNum(num+1);
    }
#    const decrease =()=>{
        setNum(num-1);
    }
  return (
    <div>
      <h1>Value : {num}</h1>
      <button className='btn' onClick={increase} >Increase</button>
      <button className='btn' onClick={decrease} >Decrease</button>
    </div>
  )
}

export default Counter;


!--------Facts----------!

# this useState runs asynchrounulsy so hence its values are updated a bit late after printing on the console as if we do this 
      const [num, setNum] = useState(10);
      const changeNum=()=>{
#         console.log(num);
#         setNum(20);
#         console.log(num);
                        -- so in these three line its should print 10 and then 20 but no its print 10 and 10 as its asyncrhous so console log happens early and this gets updated on the UI a bit late 
      }


!---------------- Working with Objects and useState--------------------!

#   const [num, setNum] = useState({user:'sarthak', age : 20});
 const btnClicked = ()=>{
  const nextNum = {...num};  // destructring 

    // since we have destructured the object now we can change them 

#   nextNum.user = 'mani';
#   nextNum.age = 23;
    
    setNum(nextNum);
  }


  return (
    <div>
      <h1>Name and Value are : {num.user} and {num.age} </h1>
      <button onClick={btnClicked} >Click</button>
    </div>
  )
this line is for increasing the gihub streak colour 
!---------------- Working with Arrays and useState--------------------!

# const [num2, setNum2] = useState(['mani',24]);
  const btnClickedArr = ()=>{
    const nextNum = [...num2];  // destructring 
    console.log(nextNum);
    // since we have destructured the object now we can change them 
#   nextNum[0] = 'mani kumar';
#   nextNum[1] = 22;
    setNum2(nextNum);
  }

  return (
    <div>
      <h1>Name and Value are : {num2[0]} and {num2[1]} </h1>
      <button onClick={btnClickedArr} >Click</button>
    </div>
  )


  !---------------------Differenet Methods to update an array in UseState-------------------------!

  There are multiple clean methods to do this depending on what you’re changing 👇
🔹 1️⃣ Using the spread operator [...]
Simple and common:

const btnClickedArr = () => {
  const newArr = [...num2]; // create a copy
  newArr[0] = 'mani kumar'; // change existing value
  newArr[1] = 50;           // change another
  setNum2(newArr);          // update state
};


Why this works:
React sees a new array object (newArr ≠ old num2) → triggers re-render.
🔹 2️⃣ Using map() to modify specific items
This is the cleanest and most declarative way:

const btnClickedArr = () => {
  setNum2(prev =>
    prev.map((val, i) => i === 0 ? 'mani kumar' : val)
  );
};


Keeps immutability
Only changes the element you want
Perfect for arrays of objects
🔹 3️⃣ For arrays of objects, use map + spread
Example:

const [num2, setNum2] = useState([
  { name: "mani", age: 20 },
  { name: "raj", age: 25 }
]);

const btnClickedArr = () => {
  setNum2(prev =>
    prev.map((obj, i) =>
      i === 0 ? { ...obj, age: 50 } : obj
    )
  );
};


Result:

[
  { name: "mani", age: 50 },
  { name: "raj", age: 25 }
]

🔹 4️⃣ Using slice() for positional replacement
If you want to replace a specific position:

const btnClickedArr = () => {
  const updated = [
    ...num2.slice(0, 1),
    'newValue',
    ...num2.slice(2)
  ];
  setNum2(updated);
};


This is a pure immutable way (especially if you’re avoiding mutation).

🔹 5️⃣ (⚠️ Advanced) Using immer.js (for big nested arrays)
If you have deeply nested objects or arrays, you can use immer:

import { produce } from "immer";

setNum2(prev =>
  produce(prev, draft => {
    draft[0] = 'mani kumar';
  })
);


It looks like mutation but under the hood it’s immutable — React-friendly.

🧠 TL;DR
Goal	Method
Change simple array element	[...arr] + index
Change by condition	.map()
Change field inside array of objects	.map() + {...obj}
Replace section	.slice()
Deeply nested state	immer

✅ Quick Example Summary

// initial
const [num2, setNum2] = useState(["A", "B", "C"]);

// update 2nd value
setNum2(prev => prev.map((v, i) => i === 1 ? "Changed" : v));

// result: ["A", "Changed", "C"]