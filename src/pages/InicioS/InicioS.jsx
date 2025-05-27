import Logo from '../../UI/logo/Logo';
import DividerB from '../../UI/dividerB/DividerB';
import PageWrapper from '../../UI/sas/sas';
import axios from 'axios';
import { ItemNavBar } from '../../UI/BotonBack/BotonBack';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../InicioS/InicioS.css';


const XLanding = () => {
  const URL = 'http://localhost:10101/auth'; 
  const navigator = useNavigate();
  const [email, setCorreo] = useState('');
  const [password, setContraseña] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, password };
    try{
      const response = await axios.post(URL, formData);
      const token = response.data.token
      if (token) {
      localStorage.setItem('token', token);
      navigator('/'); 
      }
      console.log('Datos de inicio de sesión:', response.data);
    } catch (error) {
      alert('Error al iniciar sesión. Por favor, verifica tus credenciales.');
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const formData = { email, password };
    console.log('Datos para crear cuenta:', formData);
  };

  return (
    <PageWrapper>
      <div className="relative flex justify-center items-center h-screen bg-gradient-to-r bg-[rgb(0,26,19)]">
        {/* Botón de volver arriba a la izquierda */}
        <div className="absolute top-4 left-4 z-50">
          <ItemNavBar route="/" content="<--" />
        </div>

        {/* Panel de Glassmorphism */}
        <div className="w-full max-w-md p-8 space-y-6 bg-white/30 backdrop-blur-xl rounded-2xl shadow-lg">
          <div className="flex flex-col items-center">
            <Logo />

            <h1 className="text-4xl text-center font-bold text-white mb-6">
              Bienvenido a un lugar <br /> más limpio
            </h1>

            <DividerB />

            <div className="flex flex-col items-center space-y-4 w-full">
              <input
                className="w-full h-12 px-4 rounded-xl bg-white/70 text-center placeholder:text-center text-gray-800"
                type="text"
                placeholder="Correo"
                value={email}
                onChange={(e) => setCorreo(e.target.value)}
              />
              <input
                className="w-full h-12 px-4 rounded-xl bg-white/70 text-center placeholder:text-center text-gray-800"
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setContraseña(e.target.value)}
              />
            </div>

            <DividerB />

            <div className="flex flex-col gap-4 w-full">
              <button
                className="w-full py-2 border border-gray-300 text-green-500 font-bold rounded-full hover:bg-gray-100 transition"
                onClick={handleLoginSubmit}
              >
                Iniciar sesión
              </button>
              <button
                className="w-full py-2 bg-green-400 hover:bg-green-900 text-white font-bold rounded-full transition"
                onClick={handleSignUpSubmit}
              >
                Crear cuenta
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default XLanding;