import './App.css';
import Homepage from './Routes/Homepage';
import Login from './Routes/Login';
import { routes } from './Routes/routePaths'
import NotFound from './Routes/NotFound';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signup from './Routes/Signup';

const { HOME, LOGIN, SIGNUP } = routes;

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        {/* If the user is logged in */ }
        <Route path={HOME} element={<Homepage />} />
        {/* If the user is not logged in */ }
        <Route path={LOGIN} element={<Login />} />
        <Route path={SIGNUP} element={<Signup />} />
        {/* can be accessed by both types of users */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;