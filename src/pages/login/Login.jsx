import React from 'react'
import './login.css'
const Login = () => {
  return (
    <div className="container">
        <div className="formWrapper">
            <h2>Secret Diary</h2>
            <p>Keep your thaught securly!</p>
            <p>Welcome again</p>
            <form>
                <input type="text" name="username" id="username" placeholder='Your Username' />
                <input type="password" name="password1" id="passowrd1" placeholder='Your Password'/>
               
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login