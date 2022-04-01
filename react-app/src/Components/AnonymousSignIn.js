import React from 'react'
import { signInAnonymously } from "firebase/auth"
import { auth } from "../firebase"

const AnonymousSignIn = ({user, setUser, addUserCollection}) => {
    return (
        <div>
            <button onClick={(() => {
                signInAnonymously(auth)
                    .then((user) => {
                        // Signed in..
                        // addUserCollection(user)
                        setUser({
                            uid: user.user.uid
                        })
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