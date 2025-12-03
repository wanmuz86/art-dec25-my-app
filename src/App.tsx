
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
  
  const handleOnNameChanged = (name:string)=> {
    console.log(name);

  }
  return (
    <>
     <h1>User Information</h1>
     {/* Pass the data to the component through props*/}
     <UserCard user={user} profile={profile}/>
     <hr />
     <h2>Pass back data part</h2>
     <UserInput onNameChange={handleOnNameChanged}/>
    </>
  )
}

export default App
