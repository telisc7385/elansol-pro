import React, { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

function PrivateRoute() {
  
  const navigate = useNavigate()

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo')

    if (!userInfo) {
      navigate('/login')
    }
    
  }, [navigate])

  return <Outlet />
}

export default PrivateRoute
