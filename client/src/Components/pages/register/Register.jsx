import React from 'react'
import './Register.css'
import {Link} from 'react-router-dom'
const Register = () => {
  return (
    <div className='register'>
        <label className='registerTitle'>Register</label>
        <form className='registerForm'>
            <label >UserName</label>
            <input className='registerInput' type="email" placeholder='Enter Your Name..' />
            <label >Email</label>
            <input className='registerInput' type="email" placeholder='Enter email address..' />

            <label >Password</label>
            <input type="email" className='registerInput' placeholder='Enter password address..' />
            <button className='registerbutton'>Register</button>
        </form>
        <button className='registerLoginButton'>
          <Link className='link' to='/login'>LOGIN</Link>
        </button>
    </div>
  )
}

export default Register