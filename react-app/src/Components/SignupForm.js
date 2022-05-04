import React from 'react'

// const name = [name, setName]
// const email = [email, setEmail]
// const password = [password, setPassword]

const SignupForm = () => {
    return (
        <div>
            <form className="signupForm">
                <h2>Sign up</h2>
                <div className='signupDiv'>
                <label>
                    Name:
                    <input type="text" className="nameField" />
                </label>
                </div>
                <div className='signupDiv'>
                <label>
                    Email:
                    <input type="text" classNameme="emailField" />
                </label>
                </div>
                <div className='signupDiv'>
                <label>
                    Password:
                    <input type="text" className="passwordField" />
                </label>
                </div>
                <div className='signupButtonDiv'>
                <input type="submit" className="submitButton" value="Sign up" />
                </div>
            </form>
        </div>
    )
}

export default SignupForm