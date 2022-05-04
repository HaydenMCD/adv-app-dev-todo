import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const NotFound = () => {
  return (
    <div className="NotFound" >
        <div>
        <Navbar />
      </div>
      <div className='error-title'>
        404
      </div>
      <div className="error-sub-title">
        Page not found
      </div>
      <div className='error-text'>
        The page you are looking for doesn't exist or another error occured.
      </div>
      <div className='btn-container-error'>
        <Link to='/' style={{ textDecoration: 'none' }}>
      <Button className='return-home-btn' variant="contained">Return Home</Button>
      </Link>
      </div>
    </div>
  );
}

export default NotFound;