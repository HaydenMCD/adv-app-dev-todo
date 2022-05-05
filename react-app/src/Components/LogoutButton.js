import React from 'react';
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import { Button } from 'react-bootstrap';

const LogoutButton = () => {
  return (
    <div>
        <Button variant="Light" onClick={(() => {
            signOut(auth).then(() => console.log(auth)).catch(err => console.log(err));
        })}>Logout</Button>
    </div>
  )
}

export default LogoutButton