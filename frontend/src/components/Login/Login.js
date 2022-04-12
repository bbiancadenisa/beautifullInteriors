import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import './Login.css'


const Login = (props) => {

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [isRegistered, setIsRegistered] = useState(false)
    const [error,setError] = useState()

    const handleLogin = (e) => {
        e.preventDefault()
        setUserEmail(e.target.value)
        setUserPassword(e.target.value)
        console.log('logged in')
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        setUserEmail(e.target.value)
        setUserPassword(e.target.value)
        console.log('signed up')
    }

    const handleFormComplete = (event) => {
        console.log('completed')
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const payload = {
          userEmail: userEmail,
          userPassword: userPassword
        }
        try {
            let res = await axios.post('http://localhost:3001/login', payload)
            console.log(res);
            history.push("/menu"); 
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
                        handleLogin()
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
                                onChange={(event) => handleFormComplete(event)}
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type='password'
                                id='password'
                                name='password'
                                className='form-control mt-2'
                                placeholder='Input your password'
                                value={userPassword}
                                onChange={(event) => handleFormComplete(event)}
                            />
                        </div>
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