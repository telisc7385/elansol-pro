import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Login.css' 

function Register() {
  const [user, setUser] = useState({
    name: '',
    dob: '',
    email: '',
    password: '',
  })

  const url = 'http://localhost:5000'

  const onChangeInput = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const registerSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(url + '/api/users/register', { ...user })
      localStorage.setItem('userInfo', JSON.stringify(res.data))
      window.location.href = '/home'
    } catch (err) {
      alert(err.response ? err.response.data.msg : err.message)
    }
  }

  return (
    <div className='login-form'>
      <h2>Register for an Account</h2>
      <form onSubmit={registerSubmit}>
        <div className='form-group'>
          <input
            type='text'
            name='name'
            className='form-control mb-3'
            placeholder='Name'
            value={user.name}
            onChange={onChangeInput}
          />
          <input
            type='date'
            name='dob'
            className='form-control mb-3'
            placeholder='Date of Birth'
            value={user.dob}
            onChange={onChangeInput}
          />
          <input
            type='email'
            name='email'
            className='form-control mb-3'
            placeholder='Email'
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
          />
        </div>
        <div className='form-group'>
          <button
            type='submit'
            className='btn btn-primary btn-block mb-3 form-control'
          >
            Register
          </button>
        </div>
      </form>
      <p className='mt-3'>
        Already have an account? <Link to='/login'>Login here</Link>
      </p>
    </div>
  )
}

export default Register
