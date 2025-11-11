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