// App.jsx
import React from 'react'
import { Header } from './assets/UI/header'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  )
}

