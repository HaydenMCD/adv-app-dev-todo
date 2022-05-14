import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'
import { Navigate } from 'react-router-dom';

const Groups = ({user}) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <div>
        <NavbarComponent />
      </div>
      <div>
        This is the page where users will be able to join groups
      </div>
    </>
  )
}

export default Groups