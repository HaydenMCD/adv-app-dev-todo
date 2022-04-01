import './App.css';
import React, { useEffect } from "react";
import { useState } from 'react';
import LoginButton from './Components/LoginButton';
import Title from "./Components/title";
import AddTodo from './Components/AddTodo';
import Todo from './Components/Todo';
import { db, auth } from "./firebase"
import { routes } from './Routes/routePaths'
import LogoutButton from './Components/LogoutButton';
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
} from "firebase/firestore"
import { async } from '@firebase/util';
import AnonymousSignIn from './Components/AnonymousSignIn';

function App() {
  const [user, setUser] = useState({
    uid: null,
    name: '',
    loginProvider: null,
    toDoCollection: {},
  })

  const addUserCollection = async (user) => {
    const colref = await doc(db, 'users', user.uid);
    try {
      const res = await setDoc(colref, {
          uid: user.uid,
          name: user.name,
          createdAt: serverTimestamp()
        })
    } catch (error) {
      console.log('error') 
    }
  }

  useEffect(async () => {
    if(user.uid){
      // console.log(user)
      console.log('user set from anon comp', user)
    }
  }, [user])

  const[todos, setTodos] = React.useState([])
  const { HOME, LOGIN } = routes;
  React.useEffect(() => {
    const q = query(collection(db, "todos"))
    const unsub = onSnapshot(q, (QuerySnapshot) => {
      let todosArray = []
      QuerySnapshot.forEach((doc) => {
        todosArray.push({...doc.data(), id: doc.id})
      })
      setTodos(todosArray)
    })
    return () => unsub()
  }, [])

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title })
  }

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id ), {
      completed: !todo.completed
    })
  }

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id))
  }

  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <AddTodo user={user} />
      </div>
      <div>
        <AnonymousSignIn user={user} setUser={setUser} />
        <LogoutButton />
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

export default App;