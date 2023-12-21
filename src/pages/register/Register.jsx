import React from 'react'
import './register.css'
const Register = () => {
  return (
    <div className="container">
        <div className="formWrapper">
            <h2>Secret Diary</h2>
            <p>Keep your thaught securly!</p>
            <p>Interested? Sign In!</p>
            <form>
                <input type="text" name="username" id="username" placeholder='Your Username' />
                <input type="email" name="email" id="email" placeholder='Your Email address' />
                <input type="password" name="password1" id="passowrd1" placeholder='Your Password'/>
                <input type="password" name="password2" id="password2" placeholder='Confirm your password'/>
                <button type="submit">Sign up</button>
            </form>
            <p>Already have an account? Login</p>
        </div>
    </div>
  )
}

export default Register