import React, { useEffect } from "react";
import { useState } from 'react';
import Title from "../Components/title";
import AddTodo from '../Components/AddTodo';
import Todo from '../Components/Todo';
import { db, auth } from "../firebase";
import AnonymousSignIn from "../Components/AnonymousSignIn"
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  QuerySnapshot,
  serverTimestamp,
  setDoc,
  addDoc
} from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth';

// const addUserCollection = async (user) => {
//   const colref = await doc(db, 'users', user.uid);
//   try {
//     const res = await setDoc(colref, {
//         uid: user.uid,
//         name: user.name,
//         createdAt: serverTimestamp()
//       })
//   } catch (error) {
//     console.log('error') 
//   }
// }

function Homepage() {
  const [user, setUser] = useState({
    uid: null,
    name: '',
    loginProvider: null,
    toDoCollection: {},
  });

  useEffect(() => {
    if (user) {
      console.log(user)
    }
  }, [user]);

  useEffect(async () => {
    const unsubscribe = await onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          loginProvider: user.providerId
        });
      } else {
        setUser(null);
      }
    });
    return (() => {
      unsubscribe();
    })
  }, []);


  const [todos, setTodos] = React.useState([])
  React.useEffect(() => {
    const q = query(collection(db, "todos"))
    const unsub = onSnapshot(q, (QuerySnapshot) => {
      let todosArray = []
      QuerySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id })
      })
      setTodos(todosArray)
    })
    return () => unsub()
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title })
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed
    })
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id))
  };

  return (
    <div className="Homepage">
      <div>
        <Title />
      </div>
      <div>
        <AddTodo user={user} />
      </div>
      <div className='todo-container'>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default Homepage;