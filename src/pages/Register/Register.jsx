import React, { useState } from 'react';
import Swal from 'sweetalert2';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BotonBack } from '../../UI/BotonBack/BotonBack';
import { ItemNavBar } from '../../UI/ItemNavBar/ItemNavBar'; // ✅ Agregado
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import "./Register.css";

const Register = () => {
  const URL = 'https://express-latest-6gmf.onrender.com/register';
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [telefono, setTelefono] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(URL, {
        email,
        password,
        nombres,
        apellidos,
        telefono,
      });

      Swal.fire({
        title: 'Bienvenido a Basura on time',
        text: 'Te has registrado con éxito',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true,
        allowEscapeKey: false,
        allowOutsideClick: false,
      }).then(() => {
        navigate('/');
      });
    } catch (error) {
      console.error('Error registrando:', error);
      Swal.fire({
        title: 'Error',
        text: 'No se pudo completar el registro',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo',
        confirmButtonColor: '#0A372D',
      });
    }
  };

  const handleGuardarDireccion = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      Swal.fire({
        icon: 'success',
        title: 'Dirección guardada',
        text: 'La dirección se guardó correctamente.',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } catch {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo guardar la dirección.',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    }
  };

  return (
    <section className='sectFirst glass min-h-screen flex flex-col md:flex-row justify-center items-center p-4 md:gap-20'>

      {/* Botón Volver */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-50 scale-80 md:scale-100">
        <ItemNavBar route="/" content="Volver" />
      </div>

      {/* Logo y título */}
      <div className='flex flex-col justify-center items-center mb-6 md:mb-0'>
        <img className='w-24 h-24 mb-4 md:w-[200px] md:h-[200px]' src={logoBasuraOnTime} alt="Logo" />
        <p className='FontCursive text-3xl md:text-6xl text-center text-white'>BASURA ON TIME</p>
      </div>

      {/* Formulario */}
      <form
        onSubmit={handleRegister}
        className='FontGeologica flex flex-col justify-center items-center gap-4 bg-[var(--Voscuro2)] w-full max-w-[480px] p-6 rounded-3xl md:gap-5 md:rounded-4xl md:p-8'
      >
        <p className='FontCursive text-2xl md:text-5xl text-white text-center'>Registro</p>

        <input
          type="text"
          placeholder="Nombres"
          value={nombres}
          onChange={(e) => setNombres(e.target.value)}
          className='rounded-md bg-[var(--Vclaro2)] w-full h-8 md:h-10 text-center text-white placeholder:text-center text-sm md:text-lg'
        />
        <input
          type="text"
          placeholder="Apellidos"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
          className='rounded-md bg-[var(--Vclaro2)] w-full h-8 md:h-10 text-center text-white placeholder:text-center text-sm md:text-lg'
        />
        <input
          type="text"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='rounded-md bg-[var(--Vclaro2)] w-full h-8 md:h-10 text-center text-white placeholder:text-center text-sm md:text-lg'
        />
        <input
          type="text"
          placeholder="Número de teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          className='rounded-md bg-[var(--Vclaro2)] w-full h-8 md:h-10 text-center text-white placeholder:text-center text-sm md:text-lg'
        />

        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='rounded-md bg-[var(--Vclaro2)] w-full h-8 md:h-10 text-white text-center placeholder:text-center text-sm md:text-lg'
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
          >
            {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
          </button>
        </div>

        <button
          type="submit"
          className='rounded-md w-full h-8 md:h-10 bg-[var(--Vclaro)] text-white text-sm md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'
        >
          Registrarse
        </button>

        <button
          type="button"
          onClick={handleGuardarDireccion}
          className='rounded-md w-full h-8 md:h-10 bg-[var(--Voscuro3)] text-white text-sm md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'
        >
          Guardar Dirección
        </button>
      </form>
    </section>
  );
};

export default Register;