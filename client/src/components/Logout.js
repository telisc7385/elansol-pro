import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
  
  const navigate = useNavigate()

  function handleLogout() {
    
    localStorage.removeItem('userInfo')

    navigate('/login')
  }

  
  return (
   
    <div class='d-grid gap-2 d-md-flex justify-content-md-end'>
      <button onClick={handleLogout} class='btn btn-danger' type='button'>
        Logout
      </button>
    </div>
  )
}

export default Logout
