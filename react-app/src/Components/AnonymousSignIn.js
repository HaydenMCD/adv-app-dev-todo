import React, { useEffect } from 'react'
import { signInAnonymously } from "firebase/auth"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc, serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db, auth } from '../firebase';
import { v4 } from 'uuid'

const AnonymousSignIn = ({ setUser, user }) => {
    const navigate = useNavigate();
    const login = async () => {
        const res1 = await signInAnonymously(auth)
            .then((user) => {
                setDoc(doc(db, `users/${auth.currentUser.uid}`), {
                    uid: user.user.uid,
                    name: '',
                    loginProvider: user.providerId,
                    email: '',
                    phone: user.user.phoneNumber,
                    signedIn: true,
                    isAnonymous: user.user.isAnonymous,
                    createdAt: serverTimestamp()
                })
            });
        const rando = v4();
        const res2 = setDoc(doc(db, `users/${auth.currentUser.uid}/todos`, rando), {
            title: 'my to do',
            completed: false,
            createdAt: serverTimestamp()
        })

        // add a redirect to homepage
        navigate("/")
    }

    return (
        <div>
            <Button variant='text' onClick={login}>I don't want to sign in</Button>
        </div>
    )
}

export default AnonymousSignIn