import './App.css'
import Register from './pages/Register/Register'
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'
import PanelAdmin from './pages/PanelAdmin/PanelAdmin'


export function App() {

  return (
     <>
  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Admin" element={<Admin/>} />
        <Route path="/PanelAdmin" element={<PanelAdmin/>} />
      </Routes>
        
     </>
      
  )
}

export default App
