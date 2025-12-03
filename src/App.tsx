
import { useState } from 'react'
import './App.css'
import type { Profile } from './ProfileCard'
import type { User } from './UserCard'
import UserCard from './UserCard'
import UserInput from './UserInput'

// Creating the constant to be shown in the UI

const user: User = {
  name: "Alice",
  age:28,
  email:"alice@example.com",
  role:"ADMIN" as const 
}

const profile: Profile = {
  bio:"A passionate developer and tech enthusiast",
  website: "https://alice.dev"
}

function App() {

  // State in React is data that can change over time and causes the UI to update when it changes.
  // State is a React-managed variable that stores component data and triggers a re-render when updated.
  // getter / setter

  // Declare a state, the getter = userName, setter = setUserName
// The initial value = ""
  const [userName, setUserName] = useState<string>("");

  const handleOnNameChanged = (name:string)=> {
    console.log(name);
    
    // Update the state - > use setter to update the state
    setUserName(name);

  }
  return (
    <>
     <h1>User Information</h1>
     {/* Pass the data to the component through props*/}
     <UserCard user={user} profile={profile}/>
     <hr />
     <h2>Pass back data part</h2>
    {/* Use getter {userName} to retrieve the value of state */}
     <p>User entered : {userName}</p>
     <UserInput onNameChange={handleOnNameChanged}/>
    </>
  )
}

export default App
