import React from "react";
import { db } from "../firebase"
import { collection, setDoc, doc } from "firebase/firestore";
import { async } from "@firebase/util";

export default function AddTodo({user}) {
    const[title, setTitle] = React.useState("")
    const uid = user.uid;
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (title !== "") {
            await setDoc(collection(db, "todos", uid), {
                title,
                completed: false,
            })
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