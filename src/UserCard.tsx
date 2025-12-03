
// Get it at step 4 
// To define our data / model class (OOP)

import type React from "react";
import ProfileCard, { type Profile } from "./ProfileCard";

// Typescript type - safecheck
type Role = "ADMIN" | "USER" | "GUEST";

export interface User {
    name:string;
    age:number;
    email:string;
    role:Role;
}

// Change the props type to User
// props -> Data that is passed from the parent component
// to make our component reusable

// Modify from the template tsrafce and  
// Declare  the type of props that this component will receive
// Follow declaration highlighted in yellow in page 8 of the lab


// Add profile:Profile to be passed as props as well

const UserCard:React.FC<{user:User, profile:Profile}> = ({user, profile}) => {
  return (
    <div>
        <h2>Name: {user.name}</h2>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
        <ProfileCard bio={profile.bio} website={profile.website}/>
    </div>
  )
}

export default UserCard