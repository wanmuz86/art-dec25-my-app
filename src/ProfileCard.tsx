// Define profile data type / model / class
import React from 'react'

export interface Profile {
    bio:string;
    website:string
}

// Define the prop type that is passed from parent (UserCard) to this component
// Parent will pass bio and website as props
const ProfileCard: React.FC<Profile> = ({bio,website}) => {
  return (
    <div>
        <p>Bio: {bio}</p>
        <p>Website:  <a href={website}>{website}</a></p>
    </div>
  )
}

export default ProfileCard