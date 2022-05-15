import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Login.css'


const Login = ({setIsAuth}) => {

    const history = useNavigate()

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userName, setUserName] = useState('')

    const [isRegistered, setIsRegistered] = useState(false)
    
    const [error,setError] = useState()

    const handleLogin = async (e) => {
        e.preventDefault()
        const payload = {
          userEmail: userEmail,
          userPassword: userPassword
        }
        try {
            let res = await axios.post('http://localhost:3001/login', payload)
            console.log(res,'res');
            if(res && res.data) {
                localStorage.setItem('id', res.data.id)
            }
            setIsAuth(true)
            history("/"); 
        } catch (e) {
            console.log(e);
            setError(e);
        } 
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        const payload = {
            email: userEmail,
            password: userPassword,
            userName: userName
          }
          try {
              let res = await axios.post('http://localhost:3001/users/new', payload)
              console.log(res);
              if(res)
                history("/"); 
          } catch (e) {
              console.log(e);
              setError(e);
          } 
    }

    return (
        <div className='containerLogin text-white container-fluid d-flex flex-row align-items-center text-align-center'>
            <div className='d-flex flex-column align-items-center'>
            <div className='text-center textContainer'>
                    <h1> Beautiful Interiors </h1>
                </div>
                <div className='shadow-sm rounded-lg formContainer'>
                    <form id='loginIdForm' onSubmit={(e) => {
                        e.preventDefault()
                    }}>
                        <div className='mb-4'>
                            <label>E-mail</label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                className='form-control mt-2'
                                placeholder='Input your e-mail'
                                value={userEmail}
                                onChange={(event) => setUserEmail(event.target.value)}
                            />
                        </div>
                        <div className='mb-4'>
                            <label>Password</label>
                            <input
                                type='password'
                                id='password'
                                name='password'
                                className='form-control mt-2'
                                placeholder='Input your password'
                                value={userPassword}
                                onChange={(event) => setUserPassword(event.target.value)}
                            />
                        </div>
                        {isRegistered && <div>
                            <label>Username</label>
                            <input
                                type='username'
                                id='username'
                                name='username'
                                className='form-control mt-2'
                                placeholder='Input your username'
                                value={userName}
                                onChange={(event) => setUserName(event.target.value)}
                            />
                        </div> }
                        
                        <div onClick={()=> setIsRegistered(!isRegistered)} className='links'> {isRegistered? "Back to Login" : "Don't have an account? Sign Up"}</div>
                        <div className='d-flex justify-content-center mt-3' >
                            {!isRegistered? (
                                <button className='btn btn-lg btnLogin' onClick={(e) => handleLogin(e)}>
                                    Login
                                </button>
                            ) :
                            (<button className='btn btn-lg btnLogin' onClick={(e) => handleSignUp(e)}>
                                Sign Up
                            </button>)  }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login