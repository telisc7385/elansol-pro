import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Register from './components/Register'
import 'bootstrap/dist/css/bootstrap.css'


function App() {
  return (
    

    <BrowserRouter>
      <Routes>
        
        <Route path='/login' element={<Login />} />
       
        <Route path='/register' element={<Register />} />
       
        <Route path='/' element={<PrivateRoute />}>
          
          <Route path='/home' element={<HomePage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
