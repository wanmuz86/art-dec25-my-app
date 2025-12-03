// 1) Define the props from child to parent
// In the case of passing data from child to parent
// This will be a function => void
import React from 'react'

interface UserInputProps {
    // () => void (callback function / function that will be executed after pass the data)
    onNameChange: (name:string) => void;
}

// 2)Create the component, that will receive a callback function as props
// tsrafce

const UserInput: React.FC<UserInputProps> = ({onNameChange}) => {

    // 4b
    // This function will be called everytime user enter info the input
    // "w", "a" , "n"
    // event => refer to the "typing" event from the input
    // event.target.value / Value entered user as user is typing

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // 5
        // AS user is typing, i will pass the data entered by user to the parent
        // I pass it through the props passed from parent / onNameChange

        onNameChange(event.target.value);
        
    };
    // 3) In React.js / React with typescript
    // When we create an input/form, we need to call the onChange property inside the input
    // and handle the change event  from the input / (user is typing)
  return (
    <div>
        <input type="text"
        placeholder='Enter your name'
        // 4a) Create the event
        onChange={handleChange}
        />
    </div>
  )
}

export default UserInput: React.FC<UserInputProps>