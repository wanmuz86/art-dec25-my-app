
import './App.css'
import type { User } from './UserCard'
import UserCard from './UserCard'

// Creating the constant to be shown in the UI

const user: User = {
  name: "Alice",
  age:28,
  email:"alice@example.com"
}

function App() {
  return (
    <>
     <h1>User Information</h1>
     {/* Pass the data to the component through props*/}
     <UserCard user={user}/>
    </>
  )
}

export default App
