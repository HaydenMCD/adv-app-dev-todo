import { async } from "@firebase/util";
import { getAuth } from "firebase/auth";
import React from "react";

const [email, setEmail] = React.useState("")
const [password, setPassword] = React.useState("")
const [user, setUser] = React.useState([])

const auth = getAuth()

const handleSubmit = async () => {
    //creates the user in firebase 
}

const CreateAccount = async () => [
    
]