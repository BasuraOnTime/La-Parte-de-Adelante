import './App.css'
<<<<<<< HEAD
import Header from './Layouts/Header/Header'
import Register from './pages/InicioS/InicioS'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Usuario from './pages/Usuario/Usuario'
import ContraR from './pages/ContraR/ContraR'
=======
import Register from './pages/Register/Register'
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'
import PanelAdmin from './pages/PanelAdmin/PanelAdmin'
import Solicitudes from './pages/Solicitudes/Solicitudes'
import Rutas from './pages/Rutas/Rutas'
import Camiones from './pages/Camiones/Camiones'
>>>>>>> 95ba988477a27b41a06fa618982b81a5522c1cc7


export function App() {

  return (
     <>
  
<<<<<<< HEAD
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Usuario" element={<Usuario/>} />
        <Route path="/ContraR" element={<ContraR/>} />
=======
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Admin" element={<Admin/>} />
        <Route path="/PanelAdmin" element={<PanelAdmin/>} />
        <Route path="/Camiones" element={<Camiones />} />
        <Route path="/Rutas" element={<Rutas />} />
        <Route path="/Solicitudes" element={<Solicitudes />} />
>>>>>>> 95ba988477a27b41a06fa618982b81a5522c1cc7
      </Routes>
        
     </>
      
  )
}

export default App
