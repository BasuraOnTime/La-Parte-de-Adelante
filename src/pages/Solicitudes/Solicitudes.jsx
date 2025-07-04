import React, { useState, useEffect } from 'react';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import { FcOk } from "react-icons/fc";
import { MdOutlineCancel } from "react-icons/md";
import Swal from 'sweetalert2';
import axios from 'axios';
import { BotonBack } from '../../UI/BotonBack/BotonBack';
import './Solicitudes.css';

const Solicitudes = () => {
  const URL = 'https://express-latest-6gmf.onrender.com/settingsRequest';
  const token = localStorage.getItem("token");
  
  const [solicitudes, setSolicitudes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // Función para obtener las solicitudes desde la API
  const fetchSolicitudes = async () => {
    try {
      const response = await axios.get(URL,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Solicitudes obtenidas:', response.data.data[0]);
      setSolicitudes([response.data.data[0]]);
    } catch (error) {
      console.error('Error fetching solicitudes:', error);
    }
  };

  // Llama a la función al cargar el componente
  useEffect(() => {
    fetchSolicitudes();
  }, []);

  const aceptarSolicitud = (index) => {
    Swal.fire({
      title: '¿Aceptar esta solicitud?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, aceptar',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
      allowEscapeKey: false,
      allowOutsideClick: false,
      confirmButtonColor: '#0A372D',
    }).then((result) => {
      if (result.isConfirmed) {
        const nuevasSolicitudes = [...solicitudes];
        nuevasSolicitudes[index].aceptada = true;
        setSolicitudes(nuevasSolicitudes);

        Swal.fire({
          icon: 'success',
          title: 'Solicitud aceptada',
          timer: 1500,
          showConfirmButton: false
        });
      }
    });
  };

  const eliminarSolicitud = (index) => {
    Swal.fire({
      title: '¿Eliminar esta solicitud?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
      allowEscapeKey: false,
      allowOutsideClick: false,
      confirmButtonColor: '#0A372D',
    }).then((result) => {
      if (result.isConfirmed) {
        const nuevasSolicitudes = solicitudes.filter((_, i) => i !== index);
        setSolicitudes(nuevasSolicitudes);

        Swal.fire({
          icon: 'success',
          title: 'Solicitud eliminada',
          timer: 1500,
          showConfirmButton: false
        });
      }
    });
  };

  const filteredSolicitudes = solicitudes.filter(s =>
    s.zona.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.tipo_residuo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.fecha_solicitud.includes(searchTerm) ||
    s.tamano.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.nombres.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.cantidad.toString().includes(searchTerm)
  );

  return (
    <section className='sectFirst flex flex-col md:flex-row'>
      {/* Sidebar */}
      <aside className='min-h-screen flex flex-col justify-center items-center w-full md:w-1/4 bg-[var(--Voscuro2)] p-4'>
        <div className="absolute top-4 left-4 z-50">
          <BotonBack route="/PanelAdmin" content=" " />
        </div>
        <img className='w-28 mb-3' src={logoBasuraOnTime} alt="Logo Basura On Time" />
        <p className='FontCursive text-3xl text-center text-white'>BASURA ON TIME</p>
      </aside>

      {/* Main content */}
      <main className='flex-1 bg-[var(--Voscuro2)] py-6 overflow-x-auto'>
        <div className='container mx-auto px-4'>
          <h1 className='text-3xl md:text-4xl text-white mb-4'>Gestión de Solicitudes</h1>

          {/* Search bar */}
          <div className='mb-4'>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full md:w-1/3 text-white bg-transparent border border-[var(--Vclaro3)] rounded-md px-3 py-1.5 text-sm placeholder:text-gray-400'
              placeholder='Buscar solicitud...'
            />
          </div>

          {/* Tabla */}
          <div className='overflow-x-auto'>
            <div className='min-w-[800px] text-sm'>
              <div className='grid grid-cols-7 gap-2 bg-[var(--Voscuro4)] border border-[var(--Vclaro3)] text-white font-semibold py-2 px-2 rounded-t-md'>
                <span>Zona</span>
                <span>Cant.</span>
                <span>Tipo</span>
                <span>Fecha</span>
                <span>Tamaño</span>
                <span>Solicitante</span>
                <span>Acciones</span>
              </div>

              {filteredSolicitudes.length === 0 ? (
                <p className='text-white text-center mt-3 text-sm'>No hay solicitudes que coincidan.</p>
              ) : filteredSolicitudes.map(({ zona, cantidad, tipo_residuo, fecha_solicitud, tamano, nombres, aceptada }, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-7 gap-2 border-b border-[var(--Vclaro3)] text-white py-1.5 px-2 items-center ${aceptada ? 'bg-[var(--Vclaro)] bg-opacity-20' : ''}`}
                >
                  <span>{zona}</span>
                  <span>{cantidad}</span>
                  <span>{tipo_residuo}</span>
                  <span>{fecha_solicitud}</span>
                  <span>{tamano}</span>
                  <span>{nombres}</span>
                  <div className='flex gap-1.5'>
                    <button
                      disabled={aceptada}
                      onClick={() => aceptarSolicitud(index)}
                      className={`flex items-center justify-center rounded-md w-8 h-8
                        ${aceptada ? 'bg-gray-400 cursor-not-allowed' : 'bg-[var(--Vclaro3)] hover:scale-105'}
                        transition-all duration-200`}
                      title={aceptada ? 'Solicitud aceptada' : 'Aceptar solicitud'}
                    >
                      <FcOk size={18} />
                    </button>

                    <button
                      disabled={aceptada}
                      onClick={() => eliminarSolicitud(index)}
                      className={`flex items-center justify-center rounded-md w-8 h-8
                        ${aceptada ? 'bg-gray-400 cursor-not-allowed' : 'bg-[var(--Rojo)] hover:scale-105'}
                        transition-all duration-200`}
                      title={aceptada ? 'No se puede eliminar una solicitud aceptada' : 'Eliminar solicitud'}
                    >
                      <MdOutlineCancel size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Solicitudes;
