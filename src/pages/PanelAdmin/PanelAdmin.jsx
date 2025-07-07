// src/pages/PanelAdmin/PanelAdmin.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import { TfiMapAlt } from "react-icons/tfi";
import { IoDocumentText } from "react-icons/io5";
import { RiTruckFill } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa"; // ✅ Faltaba este import
import { ItemNavBar } from '../../UI/ItemNavBar/ItemNavBar';
import { BotonBack } from '../../UI/BotonBack/BotonBack';
import './PanelAdmin.css';

const PanelAdmin = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.get('https://express-latest-6gmf.onrender.com/startAdmin', {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log('Token válido:', response.data);
      } catch (error) {
        console.error('Error verifying token:', error);
        localStorage.removeItem('token');
        navigate('/Admin');
      }
    };

    verifyToken();
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/Admin');
  };

  return (
    <section className="flex min-h-screen">
      {/* Sidebar PC */}
      <div className="hidden md:flex flex-col justify-center items-center xl:w-120 2xl:w-160 h-screen bg-[var(--Voscuro2)] fixed left-0 z-10">
        <img className="xl:w-50 2xl:w-90" src={logoBasuraOnTime} alt="Logo Basura On Time" />
        <p className="FontCursive xl:text-5xl 2xl:text-5xl text-center text-white">BASURA ON TIME</p>
      </div>

      {/* Contenido Principal */}
      <div className="flex-1 flex flex-col items-center justify-start xl:ml-120 2xl:ml-160 px-4 pt-28 md:pt-6 pb-6 FontGeologica relative">
        <p className="text-lg md:text-5xl text-white mt-25 sm:mt-2 text-center">
          Panel de Administración
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 mt-7 sm:mt-10 items-center gap-4 md:gap-8 w-full max-w-[600px]">
          <ItemNavBar route="/Camiones">
            <button className="group cursor-pointer flex flex-col justify-center items-center text-white bg-[var(--Voscuro2)]
              rounded-2xl w-32 h-32 md:w-60 md:h-60 text-base md:text-3xl gap-2 md:gap-3
              transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95">
              <RiTruckFill className="w-14 h-14 md:w-35 md:h-35 group-hover:rotate-2 group-hover:scale-105" />
              Camiones
            </button>
          </ItemNavBar>

          <ItemNavBar route="/Rutas">
            <button className="group cursor-pointer flex flex-col justify-center items-center text-white bg-[var(--Voscuro2)]
              rounded-2xl w-32 h-32 md:w-60 md:h-60 text-base md:text-3xl gap-2 md:gap-3
              transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95">
              <TfiMapAlt className="w-14 h-14 md:w-35 md:h-35 group-hover:rotate-2 group-hover:scale-105" />
              Rutas
            </button>
          </ItemNavBar>

          <ItemNavBar route="/Solicitudes">
            <button className="group cursor-pointer flex flex-col justify-center items-center text-white bg-[var(--Voscuro2)]
              rounded-2xl w-32 h-32 md:w-60 md:h-60 text-base md:text-3xl gap-2 md:gap-3
              transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95">
              <IoDocumentText className="w-14 h-14 md:w-35 md:h-35 group-hover:rotate-2 group-hover:scale-105" />
              Solicitudes
            </button>
          </ItemNavBar>

          <ItemNavBar route="/Conductores">
            <button className="group cursor-pointer flex flex-col justify-center items-center text-white bg-[var(--Voscuro2)]
              rounded-2xl w-32 h-32 md:w-60 md:h-60 text-base md:text-3xl gap-2 md:gap-3
              transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95">
              <FaUserTie className="w-14 h-14 md:w-35 md:h-35 group-hover:rotate-2 group-hover:scale-105" />
              Conductores
            </button>
          </ItemNavBar>
        </div>

        {/* Botón Cerrar Sesión */}
        <button
          className="group cursor-pointer mt-5 px-6 py-4 bg-red-500 text-white text-lg md:text-xl rounded-lg hover:bg-red-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95"
          onClick={handleLogout}
        >
          Cerrar sesión
        </button>
      </div>
    </section>
  );
};

export default PanelAdmin;
