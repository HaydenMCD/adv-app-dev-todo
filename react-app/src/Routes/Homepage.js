import React from "react";
import LoginButton from './Components/LoginButton';
import Title from "./Components/title";
import AddTodo from './Components/AddTodo';
import Todo from './Components/Todo';
import { db, auth } from "./firebase"
import { signInAnonymously } from "firebase/auth"
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  QuerySnapshot,
} from "firebase/firestore"
import { async } from '@firebase/util';

const Homepage = () => {
  return (
    <div>Homepage</div>
  )
}

export default Homepage