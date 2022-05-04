import React from "react";
import { db } from "../firebase"
import { collection, addDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default function AddTodo() {
    const[title, setTitle] = React.useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (title !== "") {
            await addDoc(collection(db, "users/", getAuth().currentUser.uid, "todos"), {
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