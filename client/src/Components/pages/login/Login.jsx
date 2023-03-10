import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
        <label className='loginTitle'>Login</label>
        <form  className="loginForm">
            <label >Email</label>
            <input className='loginInput' type="email" placeholder='Enter your email...' />
            <label >Password</label>
            <input className='loginInput' type="password" placeholder='Enter your password....' />
            <button className='loginButton'>Login</button>
        </form>
        <button className="registerButton">
          <Link className='link' to='/register'>Register</Link>
        </button>
    </div>
  )
}

export default Login