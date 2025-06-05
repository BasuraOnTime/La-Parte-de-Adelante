// src/App.jsx
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Usuario from './pages/Usuario/Usuario';
import ContraR from './pages/ContraR/ContraR';
import Register from './pages/Register/Register';
import Admin from './pages/Admin/Admin';
import PanelAdmin from './pages/PanelAdmin/PanelAdmin';
import Solicitudes from './pages/Solicitudes/Solicitudes';
import Rutas from './pages/Rutas/Rutas';
import Camiones from './pages/Camiones/Camiones';
import InicioS from './pages/InicioS/InicioS';
import SolicitudesE from './pages/SolicitudesE/SolicitudesE';
import RutasU from './pages/RutasU/RutasU';
import ProtectedRoute from './UI/ProtectedRoute/ProtectedRoute'; 

export function App() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/InicioS" element={<InicioS />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Usuario" element={<Usuario />} />
      <Route path="/ContraR" element={<ContraR />} />
      <Route path="/RutasU" element={<RutasU />} />
      <Route path="/SolicitudesE" element={<SolicitudesE />} />

      {/* Rutas protegidas (solo si hay token) */}
      <Route path="/Admin" element={
        <ProtectedRoute>
          <Admin />
        </ProtectedRoute>
      } />
      <Route path="/PanelAdmin" element={
        <ProtectedRoute  requiredRole={'admin'}>
          <PanelAdmin />
        </ProtectedRoute>
      } />
      <Route path="/Camiones" element={
        <ProtectedRoute requiredRole={'admin'}>
          <Camiones />
        </ProtectedRoute>
      } />
      <Route path="/Rutas" element={
        <ProtectedRoute requiredRole={'admin'}>
          <Rutas />
        </ProtectedRoute>
      } />
      <Route path="/Solicitudes" element={
        <ProtectedRoute requiredRole={'admin'}>
          <Solicitudes />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;
