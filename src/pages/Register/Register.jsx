import React, { useState } from 'react';
import Logo from '../../UI/logo/Logo';
import './Register.css';
import DividerB from '../../UI/dividerB/DividerB';
import PageWrapper from '../../UI/sas/sas';

const XLanding = () => {
  // Estados para controlar los inputs de correo y contraseña
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  // Función para manejar el envío del formulario de inicio de sesión
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const formData = { correo, contraseña };
    console.log('Datos de inicio de sesión:', formData);
    // Aquí puedes agregar la lógica para enviar estos datos a tu API de inicio de sesión.
  };

  // Función para manejar el envío del formulario de creación de cuenta
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const formData = { correo, contraseña };
    console.log('Datos para crear cuenta:', formData);
    // Aquí puedes agregar la lógica para enviar estos datos a tu API de creación de cuenta.
  };

  return (
    <PageWrapper>
      <div className="flex flex-col justify-between bg-[rgb(255,255,255)] text-black">
        <div className="flex flex-1">
          <Logo />

          <div
            id="Box-R"
            className="Register w-1/3 h-3/4 p-6 top-1/5 sticky flex flex-col justify-center px-8"
          >
            <h1 className="text-5xl text-center font-bold mb-12 leading-tight">
              Bienvenido a un lugar <br /> más limpio
            </h1>
            <DividerB />
            <div className="flex flex-col justify-center items-center">
              <input
                className="rounded-xl bg-[var(--Vclaro2)] w-full h-9 text-center placeholder:text-center bg-white"
                type="text"
                placeholder="Correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)} // Actualiza el estado con el valor del input
              />
              <br />
              <input
                className="rounded-xl bg-[var(--Vclaro2)] w-full h-9 text-center placeholder:text-center bg-white"
                type="password"
                placeholder="Contraseña"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)} // Actualiza el estado con el valor del input
              />
            </div>
            <DividerB />
            {/* Botón para el inicio de sesión */}
            <button
              className="w-full border border-gray-300 text-blue-500 font-bold py-2 rounded-full hover:bg-gray-100 transition"
              onClick={handleLoginSubmit}
            >
              Iniciar sesión
            </button>
            <br />
            {/* Botón para la creación de cuenta */}
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-full transition mb-2"
              onClick={handleSignUpSubmit}
            >
              Crear cuenta
            </button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default XLanding;
