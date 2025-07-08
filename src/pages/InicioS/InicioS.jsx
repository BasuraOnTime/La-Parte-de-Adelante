import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import { BotonBack } from '../../UI/BotonBack/BotonBack';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import ItemNavBar from '../../UI/ItemNavBar/ItemNavBar';
import './InicioS.css';

const XLanding = () => {
  const URL = 'https://express-latest-6gmf.onrender.com/auth';
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(prev => !prev);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos vacíos',
        text: 'Por favor ingresa tu correo y contraseña.',
        confirmButtonColor: '#0A372D',
      });
      return;
    }

    try {
      const { data } = await axios.post(URL, { email, password });
      if (data.token) {
        localStorage.setItem('token', data.token);
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => navigate('/'));
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error al iniciar sesión',
        text: error.response?.data?.message || 'Verifica tus credenciales.',
        confirmButtonColor: '#0A372D',
      });
    }
  };

  return (
    <section className='sectFirst glass min-h-screen flex flex-col md:flex-row justify-center items-center p-4 md:gap-20'>

      {/* Botón de volver fijo arriba a la izquierda */}
     <div className="absolute top-4 left-4 z-50">
         <BotonBack route="/" content=" " />
     </div>

      {/* Logo y texto */}
      <div className='flex flex-col justify-center items-center mb-6 md:mb-0'>
        <img className='w-24 h-24 mb-4 md:w-[200px] md:h-[200px]' src={logoBasuraOnTime} alt="Logo" />
        <p className='FontCursive text-3xl md:text-6xl text-center text-white'>BASURA ON TIME</p>
      </div>

      {/* Formulario */}
      <div className='FontGeologica flex flex-col justify-center items-center gap-4 bg-[var(--Voscuro2)] w-full p-6 rounded-3xl md:w-[480px] md:gap-4 md:rounded-4xl md:p-8'>

        <p className='FontCursive text-2xl md:text-5xl p-4 text-white text-center'>Iniciar sesión</p>

        <input
          className='rounded-md bg-[var(--Vclaro2)] w-full max-w-[500px] h-8 md:h-10 text-center placeholder:text-center text-white text-sm md:text-lg'
          type="text"
          placeholder='Correo electrónico'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="relative w-100 mb-3">
          <input
            className='rounded-md bg-[var(--Vclaro2)] w-full h-8 md:h-10 text-white placeholder:text-center text-center text-sm md:text-lg'
            type={showPassword ? "text" : "password"}
            placeholder='Contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-white"
            aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
          >
            {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
          </button>
        </div>

        <button
          className='rounded-md w-full max-w-[500px] h-8 md:h-10 bg-[var(--Vclaro)] text-white group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95 text-sm md:text-lg'
          onClick={handleLoginSubmit}
        >
          Iniciar sesión
        </button>

        <button
          className='rounded-md w-full max-w-[500px] h-8 md:h-10 bg-[var(--Voscuro3)] text-white group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95 text-sm md:text-lg'
          onClick={() => navigate('/register')}
        >
          Crear cuenta
        </button>

        <button
          className='text-white underline text-xs md:text-sm hover:text-[var(--Vclaro)] transition cursor-pointer'
          onClick={() => navigate('/ContraR')}
        >
          ¿Olvidaste tu contraseña?
        </button>

      </div>
    </section>
  );
};

export default XLanding;
