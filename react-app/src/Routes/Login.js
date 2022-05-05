import React from 'react';
import NavbarComponent from '../Components/NavbarComponent';
import Button from '@mui/material/Button';
import AnonymousSignIn from '../Components/AnonymousSignIn';
import EmailLogin from '../Components/EmailLogin';

const Login = ({ setUser, user }) => {
  return (
    <div className='Login'>
      <div>
        <NavbarComponent />
      </div>
      <div className='login-container'>
        <div className='email-login'>
          <EmailLogin setUser={setUser} user={user} />
        </div>
        <div className='gmail-login'>
          <Button variant="contained">Sign in using gmail</Button>
        </div>
        <div className='facebook-login'>
          <Button variant="contained">Sign in using facebook</Button>
        </div>
        <div className="anon-login">
          <AnonymousSignIn setUser={setUser} user={user} />
        </div>
      </div>
    </div>
  );
}

export default Login;