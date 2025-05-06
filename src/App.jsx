import './App.css'
import Register from './pages/Register/Register'
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'


export function App() {

  return (
     <>
  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Admin" element={<Admin/>} />
      </Routes>
        
     </>
      
  )
}

export default App
