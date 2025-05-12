import './App.css'
import Header from './Layouts/Header/Header'
import Register from './pages/Register/Register'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Usuario from './pages/Usuario/Usuario'
import ContraR from './pages/ContraR/ContraR'


export function App() {

  return (
     <>
  
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Usuario" element={<Usuario/>} />
        <Route path="/ContraR" element={<ContraR/>} />
      </Routes>
        
     </>
      
  )
}

export default App
