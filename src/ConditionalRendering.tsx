import React, { useState } from 'react'



const ConditionalRendering:React.FC = () => {
    // Create a state 
    // isLoggedIn
    // setIsLoggedIn
    // Use conditional rendering ? : to show different output in the UI
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    // This will be called from a button
    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    }

  return (
    <div>
        <h1>
            Conditional Rendering
        </h1>
        {
            // Perform conditional rendering
            isLoggedIn 
            ?
            // true statement
            <h2>Welcome back</h2>
            :
            // false stamenet
            <h2>Hello Guest, Please log in</h2>
        }
        <button onClick={toggleLogin}>{
            isLoggedIn ?
            // true statement
            "Log Out"
            :
            // false statement
            "Log In"
            }</button>
        </div>
  )
}

export default ConditionalRendering