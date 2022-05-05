import './App.css';
import Homepage from './Routes/Homepage';
import Login from './Routes/Login';
import NotFound from './Routes/NotFound';
import Groups from './Routes/Groups';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signup from './Routes/Signup';
import { useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { routes } from './Routes/routePaths'
const {
  HOME,
  LOGIN,
  SIGNUP,
  GROUPS
} = routes;

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
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
      }
    })
    return (() => unsubscribe())
  }, [auth])

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<Homepage user={user} />} />
          <Route path={LOGIN} element={<Login seterror={setUser} user={user} />} />
          <Route path={SIGNUP} element={<Signup seterror={setUser} user={user} />} />
          <Route path={GROUPS} element={<Groups seterror={setUser} user={user} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;