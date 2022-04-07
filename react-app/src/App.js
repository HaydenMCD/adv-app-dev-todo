import './App.css';
import Homepage from './Routes/Homepage';
import Login from './Routes/Login';
import { routes } from './Routes/routePaths'
import NotFound from './Routes/NotFound';
import { Route, Routes, BrowserRouter, renderMatches } from "react-router-dom";
import Signup from './Routes/Signup';
import { useState } from 'react';
import { auth, db } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { async } from '@firebase/util';
const {
  HOME,
  LOGIN,
  SIGNUP
} = routes;

const App = () => {
  const [authError, setAuthError] = useState(false);
  const [authComplete, setAuthComplete] = useState(false);
  const [user, setUser] = useState({
    uid: null,
    name: '',
    email: '',
    loginProvider: null,
    signedIn: false,
    isAnonymous: false,
    toDoCollection: [],
  });
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
      setUser({
        uid: user.uid,
        email: user.email,
        name: '',
        loginProvider: user.providerId
      })
    }
    else {
      setUser(null);
  }})
  return unsubscribe()
}, [])

  //   setAuthError(false);
  //   setAuthComplete(false);
  // }, 
  // (error) => {
  //     setAuthError(error)
  // }, 
  // (complete) => {
  //    setAuthComplete(true)
  // });

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<Homepage user={user} />} />
          <Route index path={LOGIN} element={<Login />} />
          <Route path={LOGIN} element={<Login seterror={setUser} user={user} />} />
          <Route path={SIGNUP} element={<Signup seterror={setUser} user={user} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;