import React from 'react'
import './login.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

export default function Login() {

    const {login, user} = useContext(AuthContext);
    const handleLogin =(e)=>{
        e.preventDefault();
        console.log('login')
        login();
    }
    return (
        <div className='login'>
            <div className='login--card'>
            <div className='login--card-left'>
                <h1>Hello World.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <span>Not Having an account?</span>
                <Link to = '/register'>
                <button>Register</button>
                </Link>
            </div>

            <div className='login--card-right'>
                <h1>Login</h1>
                <form>
                    <input type='text' placeholder='Username'></input>
                    <input type='password' placeholder='Password'></input>
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
            </div>
        </div>
    )
}
