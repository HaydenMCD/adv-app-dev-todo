import React from 'react';
import Title from '../Components/title';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Login = () => {
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
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Button variant='text'>I don't want to sign in</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;