import './App.css'
import Register from './pages/Register/Register'
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'
import PanelAdmin from './pages/PanelAdmin/PanelAdmin'
import Solicitudes from './pages/Solicitudes/Solicitudes'
import Rutas from './pages/Rutas/Rutas'
import Camiones from './pages/Camiones/Camiones'


export function App() {

  return (
     <>
  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Admin" element={<Admin/>} />
        <Route path="/PanelAdmin" element={<PanelAdmin/>} />
        <Route path="/Camiones" element={<Camiones />} />
        <Route path="/Rutas" element={<Rutas />} />
        <Route path="/Solicitudes" element={<Solicitudes />} />
      </Routes>
        
     </>
      
  )
}

export default App
