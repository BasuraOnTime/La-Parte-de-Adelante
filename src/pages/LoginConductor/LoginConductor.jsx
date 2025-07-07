import React, { useState } from 'react';
import ItemNavBar from '../../UI/BotonBack/BotonBack';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';

export default function LoginConductor() {
  const [loginData, setLoginData] = useState({
    correo: '',
    contraseña: ''
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Intentando iniciar sesión con:', loginData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#002015] relative">
       <div className="absolute top-4 left-4 z-50">
          <ItemNavBar route="/" content=" " />
        </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-16 px-4">
        {/* Logo y título */}
        <div className="text-center">
          <img className='img_logo' src={logoBasuraOnTime} alt="Logo" />
                 <p id='FontCursive' className='text-6xl text-center text-white'>Basura On Time</p>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#012b1d] p-8 rounded-2xl shadow-md w-full max-w-md"
        >
          <h2 className="text-3xl text-white font-bold italic text-center mb-6">
            Iniciar sesión
          </h2>

          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={loginData.correo}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded bg-[#e7f0fd] text-black"
            required
          />

          <div className="relative mb-4">
            <input
              type="password"
              name="contraseña"
              placeholder="Contraseña"
              value={loginData.contraseña}
              onChange={handleChange}
              className="w-full p-3 rounded bg-[#e7f0fd] text-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 font-semibold"
          >
            Iniciar sesión
          </button> 
        </form>
      </div>
    </div>
  );
}
