import React from 'react'
import { signInAnonymously } from "firebase/auth"
import { auth } from "../firebase"

const AnonymousSignIn = () => {
    return (
        <div>
            <button onClick={(() => {
                signInAnonymously(auth)
                    .then((user) => {
                        // Signed in..
                        // addUserCollection(user)
                        console.log("signed in")
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // ...
                    });
            })}>Sign In Anon</button>
        </div>
    )
}

export default AnonymousSignIn