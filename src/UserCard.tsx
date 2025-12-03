
// Get it at step 4 
// To define our data / model class (OOP)
// Typescript type - safecheck
export interface User {
    name:string;
    age:number;
    email:string;
}

// Change the props type to User
// props -> Data that is passed from the parent component
// to make our component reusable

const UserCard = (user: User) => {
  return (
    <div>
        <h2>Name: {user.name}</h2>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}

export default UserCard