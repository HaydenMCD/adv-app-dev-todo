import React from 'react'
import { auth } from '../firebase'
import { signOut } from "firebase/auth"

const LogoutButton = () => {
  return (
    <div>
        <button onClick={(() => {
            signOut(auth).then(() => console.log('user signed out')).catch(err => console.log(err));
        })}>Logout</button>
    </div>
  )
}

export default LogoutButton