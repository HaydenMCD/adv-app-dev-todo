import React, { useEffect } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { collection, doc, setDoc, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase';

const EmailLogin = ({ setUser, user }) => {
    const navigate = useNavigate();
    const login = async () => {
        await signInWithEmailAndPassword(auth)
    }
    return (
        <div>
            <Button variant="contained" onClick={login}>Sign in using email and password</Button>
        </div>
    )
}

export default EmailLogin