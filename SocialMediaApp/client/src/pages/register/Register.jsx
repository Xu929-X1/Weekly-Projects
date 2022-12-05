import React from 'react'
import { Link } from 'react-router-dom'
import './register.scss'
export default function Register() {
  return (
    <div className='register'>
      <div className='register--card'>
        <div className='register--card-left'>
          <h1>BX Social</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <span>Have an account?</span>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>

        <div className='register--card-right'>
          <h1>Login</h1>
          <form>
            <input type='text' placeholder='Username'></input>
            <input type='password' placeholder='Password'></input>
            <input type='Email' placeholder='Email'></input>
            <input type='text' placeholder='Name'></input>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}
