import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'
import SignupForm from '../Components/SignupForm'

const Signup = () => {
  return (

    <div className="signup">
      <div>
        <NavbarComponent />
      </div>
      <div>
        <SignupForm />
      </div>
    </div>
  )
}

export default Signup