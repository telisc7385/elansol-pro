import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import './Login.css'
function Login() {
  
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const url = 'http://localhost:5000'

  const onChangeInput = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const loginSubmit = async (e) => {
    e.preventDefault()
    try {
     const res = await axios.post(url + '/api/users/login', {
        ...user,
      })

      setUser({ email: '', password: '' })

      localStorage.setItem('userInfo', JSON.stringify(res.data))

      window.location.href = '/home'
    } catch (err) {
      alert(err.response.data.msg)
    }
  }
  return (
    <>
      <div className='login-form'>
        <h2>Sign in to Your Account</h2>
        <form
          action='/examples/actions/confirmation.php'
          method='post'
          onSubmit={loginSubmit}
        >
          <div className='text-center'>
            <img
              src='https://www.tutorialrepublic.com/examples/images/avatar.gif'
              className='rounded-circle avatar'
              alt='Avatar'
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control mb-3'
              placeholder='Email'
              name='email'
              required
              value={user.email}
              onChange={onChangeInput}
            />
            <input
              type='password'
              name='password'
              className='form-control mb-3'
              placeholder='Password'
              value={user.password}
              onChange={onChangeInput}
              required
            />
          </div>
          <div className='form-group'>
            <button
              type='submit'
              className='btn btn-primary btn-block mb-3 form-control'
            >
              Sign in
            </button>
          </div>
          <div className='bottom-action clearfix'>
            <label className='float-left form-check-label'>
              <input type='checkbox' /> Remember me
            </label>
          </div>
        </form>
        <p className='mt-3'>
          Don't have an account? <Link to='/register'>Register here</Link>
        </p>
      </div>
    </>
  )
}

export default Login
