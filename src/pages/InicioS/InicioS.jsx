import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const XLanding = () => {
  const URL = 'http://localhost:10101/auth';
  const navigate = useNavigate();
  const [email, setCorreo] = useState('');
  const [password, setContraseña] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, password };
    try {
      const response = await axios.post(URL, formData);
      const token = response.data.token;
      if (token) {
        localStorage.setItem('token', token);
        navigate('/');
      }
    } catch (error) {
      alert('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  return (
    <div className="flex h-screen bg-[#20C997] text-black font-sans">
      {/* Lado izquierdo con ícono */}
      <div className="w-1/2 flex items-center justify-center">
        <img
          src="/icons/recycle-truck.png"
          alt="Recycle Icon"
          className="w-2/3 max-w-sm"
        />
      </div>

      {/* Lado derecho - formulario */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-white text-center px-6 lg:px-10 min-h-screen pt-24 lg:pt-32">
        {/* Logo */}
        <div
          className="bg-emerald-500 px-6 py-3 rounded-lg shadow-2xl text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-10"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
        >
          Basura <span className="italic text-gray-100">on Time</span>
        </div>

        {/* Título */}
        <h2 className="text-xl lg:text-2xl font-bold mb-4">
          Bienvenido a un lugar más ordenado
        </h2>

        {/* Línea negra decorativa */}
        <div className="h-px w-1/3 bg-black mx-auto mb-6" />

        {/* Formulario */}
        <form onSubmit={handleLoginSubmit} className="w-full max-w-sm space-y-6 pt-4">
          <input
            type="text"
            placeholder="Usuario/Correo"
            value={email}
            onChange={(e) => setCorreo(e.target.value)}
            className="w-full py-2.5 px-4 rounded-lg text-left bg-white border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setContraseña(e.target.value)}
            className="w-full py-2.5 px-4 rounded-lg text-left bg-white border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          {/* Botón de Iniciar sesión */}
          <button
            type="submit"
            className="w-56 mx-auto py-4 rounded-lg bg-emerald-600 text-white font-semibold shadow-md hover:bg-emerald-700 active:scale-95 transition duration-300"
          >
            Iniciar sesión
          </button>

          {/* Botón de Crear Cuenta */}
          <button
            type="button"
            onClick={() => Item}
            className="w-56 mx-auto py-4 rounded-lg border border-emerald-600 text-emerald-600 font-semibold bg-white shadow-md hover:bg-emerald-50 active:scale-95 transition duration-300"
          >
            Crear Cuenta
          </button>
        </form>
      </div>
    </div>
  );
};

export default XLanding;
