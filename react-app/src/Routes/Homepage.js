import React from "react";
import AddTodo from '../Components/AddTodo';
import Todo from '../Components/Todo';
import Navbar from "../Components/Navbar";
import { db } from "../firebase";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  QuerySnapshot,
} from "firebase/firestore";

function Homepage({user}) {

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
        <Navbar />
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