import React, { useState } from 'react'


// FC - functional component
const Counter:React.FC = () => {
    // Create a state (counter)
    // count - getter
    // setCount - setter
    const [count, setCount] = useState<number>(0);

    /* 
    JSX= Javascript Extension
    jsx allow us to create UI in React.js using HTML code
     then it will be transpiled / converted by babel into the original JS code in React
     createElement....

     -- event will be camel case : onClick, onChange
     -- There is no for , class in JSX : htmlFor, className, 
     -- <label htmlFor="name" className="form">
     -- return will always have element
      --- either return div/ span
      --- <></> Enter element => Just for Structuring purpose
      --- the style/ Inlince CSS is camel case  // fontSize, backgroundColor
    */
   const increment = () => setCount(count+1);
   const decrement = () => setCount(count-1);
   
  return (
  <div>
        <h3 style={{fontSize:'32px', textAlign:'center'}}>Counter : {count}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
 
  )
}



export default Counter