import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import { TfiMapAlt } from "react-icons/tfi";
import { IoDocumentText } from "react-icons/io5";
import { RiTruckFill } from "react-icons/ri";
import { ItemNavBar } from '../../UI/ItemNavBar/ItemNavBar';
import { FaUserTie } from "react-icons/fa";

import "./PanelAdmin.css"

const PanelAdmin = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('rol');
        Swal.fire({
            icon: 'error',
            title: 'Sesión cerrada',
            showConfirmButton: false,
            timer: 1500,
        }).then(() => navigate('/Admin'));
    };


    return (
        <section className='sectFirst'>
            <div className='min-h-max flex flex-col justify-center items-center w-180 h-screen bg-[var(--Voscuro2)] position fixed left-0'>
                <img className='ImgLogo' src={logoBasuraOnTime} alt="" />
                <p className='FontCursive text-5xl text-center text-white'>BASURA ON TIME</p>
            </div >
            <div className='DivPanelAdmin FontGeologica'>
                <p className='text-6xl text-white mb-20'>Panel de Administracion</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <ItemNavBar route='/Camiones'>
                        <button className='group cursor-pointer flex flex-col justify-center items-center text-white bg-[var(--Voscuro2)] 
                            rounded-2xl w-60 h-60 text-3xl gap-3
                            transition-all duration-300 ease-in-out
                            hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'>
                            <RiTruckFill className='w-35 h-35 transition-transform duration-300 group-hover:rotate-2 group-hover:scale-105' />
                            Camiones
                        </button>
                    </ItemNavBar>
                    <ItemNavBar route='/Rutas'>
                        <button className='group cursor-pointer flex flex-col justify-center items-center text-white bg-[var(--Voscuro2)] 
                            rounded-2xl w-60 h-60 text-3xl gap-3
                            transition-all duration-300 ease-in-out
                            hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'>
                            <TfiMapAlt className='w-35 h-35 transition-transform duration-300 group-hover:rotate-2 group-hover:scale-105' />
                            Rutas
                        </button >
                    </ItemNavBar>
                    <ItemNavBar route='/Solicitudes'>
                        <button className='group cursor-pointer flex flex-col justify-center items-center text-white bg-[var(--Voscuro2)] 
                            rounded-2xl w-60 h-60 text-3xl gap-3
                            transition-all duration-300 ease-in-out
                            hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'>
                            <IoDocumentText className='w-35 h-35 transition-transform duration-300 group-hover:rotate-2 group-hover:scale-105' />
                            Solicitudes
                        </button>
                    </ItemNavBar>
                    <ItemNavBar route='/Conductores'>
                        <button className='group cursor-pointer flex flex-col justify-center items-center text-white bg-[var(--Voscuro2)] 
                        rounded-2xl w-60 h-60 text-3xl gap-3
                        transition-all duration-300 ease-in-out
                        hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'>
                            <FaUserTie className='w-35 h-35 transition-transform duration-300 group-hover:rotate-2 group-hover:scale-105' />
                            Conductores
                        </button>
                    </ItemNavBar>
                </div>
                <button
                    className='absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'
                    onClick={handleLogout}
                >
                    Cerrar sesión
                </button>
            </div>
        </section>
    );
};

export default PanelAdmin;
