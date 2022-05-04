import React from 'react'
import Navbar from '../Components/Navbar'
import SignupForm from '../Components/SignupForm'

const Signup = () => {
  return (

    <div className="signup">
      <div>
        <Navbar />
      </div>
      <div>
        <SignupForm />
      </div>
    </div>
  )
}

export default Signup