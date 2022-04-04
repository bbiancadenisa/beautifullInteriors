import React, { useState } from 'react';
import './Login.css'


const Login = (props) => {

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const handleLogin = () => {
       console.log('logged in')
    }

    const handleFormComplete = (event) => {
        console.log('completed')
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
                        <div className='d-flex justify-content-center mt-3' >
                            <button className='btn btn-lg btnLogin'>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login