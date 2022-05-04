import React from 'react'
import { auth } from '../firebase'
import { getAuth, signOut } from "firebase/auth"

const LogoutButton = () => {
  return (
    <div>
        <button onClick={(() => {
            signOut(auth).then(() => console.log(getAuth().currentUser.uid)).catch(err => console.log(err));
        })}>Logout</button>
    </div>
  )
}

export default LogoutButton