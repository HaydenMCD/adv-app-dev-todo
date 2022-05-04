import React from "react";
import { db } from "../firebase"
import { addDoc, doc, setDoc } from "firebase/firestore";
import { auth } from "../firebase";
import { v4 } from 'uuid';

export default function AddTodo() {
    const[title, setTitle] = React.useState("")
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const newid = v4();
        if (title !== "") {
            setDoc(doc(db, `users/${auth.currentUser.uid}/todos/${newid}`), {
                title: title,
                completed: false,
            })
            setTitle("")
        }
    }

    return (
        <form className="add-item" onSubmit={handleSubmit}>
            <div className="input-container">
                <input
                    data-testid="add-item-input"
                    id="input"
                    type="text"
                    placeholder="Enter list item"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="btn-container">
                <button data-testid="add-item-button">Add item</button>
            </div>
        </form>
    )
}