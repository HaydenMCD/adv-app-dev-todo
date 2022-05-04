import React from 'react';
import Title from '../Components/title';
import Button from '@mui/material/Button';
import AnonymousSignIn from '../Components/AnonymousSignIn';
import LogoutButton from '../Components/LogoutButton';

const Login = ({setUser, user}) => {
  return (
    <div className='Login'>
      <div>
        <Title />
      </div>
      <div className='login-container'>
        <div className='email-login'>
          <Button variant="contained">Sign in using email and password</Button>
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
        <div>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}

export default Login;