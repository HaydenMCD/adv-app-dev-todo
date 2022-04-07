import React, { useEffect } from 'react'
import { signInAnonymously } from "firebase/auth"
import { auth } from "../firebase"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { collection, doc, setDoc, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase';

const AnonymousSignIn = ({ setUser, user }) => {
    const navigate = useNavigate();
    const login = async () => {
        await signInAnonymously(auth)
            .then(async (user) => {
                const colRef = collection(db, 'users');
                const res = await addDoc(colRef, {
                    uid: user.user.uid,
                    name: '',
                    loginProvider: user.providerId,
                    email: '',
                    phone: user.user.phoneNumber,
                    signedIn: true,
                    isAnonymous: user.user.isAnonymous,
                    createdAt: serverTimestamp()
                }).then((data) => {
                        const ref2 = collection(db, data.path, '/toDos');
                        const res2 = addDoc(ref2, {
                            completed: false,
                            title: '',
                            description: '',
                            createdAt: serverTimestamp(),
                            updatedAt: serverTimestamp()
                        })
                            .then(data => {
                                console.log(data);
                            })
                            .catch(err => console.log(err));
                    })
                    .catch(err => {
                        console.log(err)
                    });
            })
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }
    return (
        <div>
            <Button variant='text' onClick={login}>I don't want to sign in</Button>
        </div>
    )
}

export default AnonymousSignIn