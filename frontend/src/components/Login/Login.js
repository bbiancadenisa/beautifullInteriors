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
        <div>
            <div>
                <div>
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
                                placeholder='Input your password'
                                value={userPassword}
                                onChange={(event) => handleFormComplete(event)}
                            />
                        </div>
                        <div>
                            <button>
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