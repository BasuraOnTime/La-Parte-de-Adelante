import React from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    const success = false;

    if (success) {
      Swal.fire({
        title: 'Bienvenido a Basura on time',
        text: 'Te has registrado con exito',
        icon: 'success',
        showConfirmButton: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
        timer: 2000,
        timerProgressBar: true
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          navigate('/');
        }
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'No se pudo completar el registro',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo',
        confirmButtonColor: '#0A372D',
      });
    }
  };

  return (
    <section className='sectFirst glass p-[50px] place-items-center '>
      <div className='flex flex-col justify-center items-center '> 
        <img className='img_logo' src={logoBasuraOnTime} alt="" />
        <p id='FontCursive' className='text-6xl text-center text-white'>BASURA ON TIME</p>
      </div>
      <div className='FontGeologica flex flex-col justify-center items-center gap-3.5 bg-[var(--Voscuro2)] w-120 h-150 rounded-4xl '>
        <p id='FontCursive' className='text-5xl p-10 text-white'>Registro</p>
        <input className='rounded-md bg-[var(--Vclaro2)] w-100 h-10 text-center placeholder:text-center text-white' type="text" placeholder='Nombres' />
        <input className='rounded-md bg-[var(--Vclaro2)] w-100 h-10 text-center placeholder:text-center text-white' type="text" placeholder='Apellidos' />
        <input className='rounded-md bg-[var(--Vclaro2)] w-100 h-10 text-center placeholder:text-center text-white' type="text" placeholder='Correo electrónico' />
        <input className='rounded-md bg-[var(--Vclaro2)] w-100 h-10 text-center placeholder:text-center text-white' type="text" placeholder='Número de teléfono'/>
        <input className='rounded-md bg-[var(--Vclaro2)] w-100 h-10 text-center placeholder:text-center text-white' type="password" placeholder='Contraseña' />
        <button
          className='rounded-md w-100 h-10 bg-[var(--Vclaro)] text-white group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'
          onClick={handleRegister}
        >
          Registrarse
        </button>
        <button className='rounded-md w-100 h-10 bg-[var(--Voscuro3)] text-white group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'>
          Dirección
        </button>
      </div>
    </section>
  );
};

export default Register;
