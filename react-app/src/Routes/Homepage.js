import React from "react";
import AddTodo from '../Components/AddTodo';
import Todo from '../Components/Todo';
import NavbarComponent from "../Components/NavbarComponent";
import { db, auth } from "../firebase";
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
    if(user) {
      const q = query(collection(db, `users/${auth.currentUser.uid}/todos`))
      const unsub = onSnapshot(q, (QuerySnapshot) => {
        let todosArray = []
        QuerySnapshot.forEach((doc) => {
          todosArray.push({ ...doc.data(), id: doc.id })
        })
        setTodos(todosArray)
      })
      return () => unsub()
    }
  }, [user]);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, `users/${auth.currentUser.uid}/todos/${todo.id}`), { title: title })
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, `users/${auth.currentUser.uid}/todos/${todo.id}`), {
      completed: !todo.completed
    })
  };

  const handleDelete = async (todo) => {
    if (todos.length >= 1) {
      await deleteDoc(doc(db, `users/${auth.currentUser.uid}/todos/${todo}`));
    }
  };

  return (
    <div className="Homepage">
      <div>
      <NavbarComponent />
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