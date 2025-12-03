// Define the props from child to parent
// In the case of passing data from child to parent
// This will be a function => void
import React from 'react'

interface UserInputProps {
    // () => void (callback function / function that will be executed after pass the data)
    onNameChange: (name:string) => void;
}

// Create the component, that will receive a callback function as props
// tsrafce

const UserInput: React.FC<UserInputProps> = ({onNameChange}) => {

    // This function will be called everytime user enter info the input
    // "w", "a" , "n"
    // event => refer to the "typing" event from the input
    // event.target.value / Value entered user as user is typing

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // AS user is typing, i will pass the data entered by user to the parent
        // I pass it through the props passed from parent / onNameChange
        onNameChange(event.target.value);
        
    };
    // In React.js / React with typescript
    // When we create an input/form, we need to call the onChange property inside the input
    // and handle the change event  from the input / (user is typing)
  return (
    <div>
        <input type="text"
        placeholder='Enter your name'
        onChange={handleChange}
        />
    </div>
  )
}

export default UserInput: React.FC<UserInputProps>