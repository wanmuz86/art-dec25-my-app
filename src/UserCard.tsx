
// Get it at step 4 
// To define our data / model class (OOP)

import type React from "react";

// Typescript type - safecheck
export interface User {
    name:string;
    age:number;
    email:string;
}

// Change the props type to User
// props -> Data that is passed from the parent component
// to make our component reusable

// Modify from the template tsrafce and  
// Declare  the type of props that this component will receive
// Follow declaration highlighted in yellow in page 8 of the lab

const UserCard:React.FC<{user:User}> = ({user}) => {
  return (
    <div>
        <h2>Name: {user.name}</h2>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}

export default UserCard