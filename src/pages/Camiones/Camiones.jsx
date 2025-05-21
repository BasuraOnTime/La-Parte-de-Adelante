import React, { useState } from 'react';
import './Camiones.css';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import { MdEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

const Camiones = () => {
    const [showForm, setShowForm] = useState(false);
    const [nuevoCamion, setNuevoCamion] = useState({
        placa: '',
        modelo: '',
        capacidad: 'Alta',
        estado_Camion: 'Activo',
        Tipo_camion: 'Especial',
    });

    const [camiones, setCamiones] = useState([
        {
            placa: 'ABC-123',
            modelo: 'Modelo X',
            capacidad: 'Alta',
            estado_Camion: 'Activo',
            Tipo_camion: 'Especial'
        },
        {
            placa: 'DEF-456',
            modelo: 'Modelo Y',
            capacidad: 'Media',
            estado_Camion: 'Inactivo',
            Tipo_camion: 'Recolección'
        }
    ]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoCamion({ ...nuevoCamion, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCamiones([...camiones, nuevoCamion]);
        setNuevoCamion({
            placa: '',
            modelo: '',
            capacidad: 'Alta',
            estado_Camion: 'Activo',
            Tipo_camion: 'Especial'
        });
        setShowForm(false);
    };

    return (
        <section className='sectFirst'>
            {/* Sidebar */}
            <div className='min-h-max flex flex-col justify-center items-center w-180 h-screen bg-[var(--Voscuro2)] position fixed left-0'>
                <img className='ImgLogo' src={logoBasuraOnTime} alt="" />
                <p className='FontCursive text-5xl text-center text-white'>BASURA ON TIME</p>
            </div>

            {/* Contenedor principal con scroll interno */}
            <div className='DivCamion FontGeologica bg-[var(--Voscuro2)] ml-[250px] h-[calc(100vh-40px)] mt-5 overflow-y-auto p-5 relative'>
                <h1 className='text-5xl text-white mb-6'>Gestión de camiones</h1>

                <div className='flex flex-wrap gap-6 mb-6'>
                    <button onClick={() => setShowForm(true)} className='group cursor-pointer rounded-md w-40 h-12 bg-[var(--Vclaro3)] text-white text-xl transition-all duration-300 ease-in-out
                        hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'>Agregar</button>
                    <input type="text" className='text-white rounded-md border border-[var(--Vclaro3)] text-center w-80 text-xl' placeholder='Buscar camión...' />
                </div>

                {/* Modal flotante sin fondo oscuro */}
                {showForm && (
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-start z-50 mt-10 bg-transparent">
                        <form onSubmit={handleSubmit} className="bg-[var(--Voscuro4)] p-6 rounded-lg shadow-lg w-96 text-white flex flex-col gap-4">
                            <h2 className="text-2xl mb-2">Agregar Camión</h2>
                            <input
                                type="text"
                                name="placa"
                                value={nuevoCamion.placa}
                                onChange={handleInputChange}
                                placeholder="Placa"
                                required
                                className="p-2 rounded bg-[var(--Voscuro2)] text-white placeholder-white border"
                            />
                            <input
                                type="text"
                                name="modelo"
                                value={nuevoCamion.modelo}
                                onChange={handleInputChange}
                                placeholder="Modelo"
                                required
                                className="p-2 rounded bg-[var(--Voscuro2)] text-white placeholder-white border"
                            />
                            <select
                                name="capacidad"
                                value={nuevoCamion.capacidad}
                                onChange={handleInputChange}
                                className="p-2 rounded bg-[var(--Voscuro2)] text-white border"
                            >
                                <option value="Alta">Alta</option>
                                <option value="Media">Media</option>
                                <option value="Baja">Baja</option>
                            </select>
                            <select
                                name="estado_Camion"
                                value={nuevoCamion.estado_Camion}
                                onChange={handleInputChange}
                                className="p-2 rounded bg-[var(--Voscuro2)] text-white border"
                            >
                                <option value="Activo">Activo</option>
                                <option value="Inactivo">Inactivo</option>
                                <option value="Mantenimiento">Mantenimiento</option>
                            </select>
                            <select
                                name="Tipo_camion"
                                value={nuevoCamion.Tipo_camion}
                                onChange={handleInputChange}
                                className="p-2 rounded bg-[var(--Voscuro2)] text-white border"
                            >
                                <option value="Especial">Especial</option>
                                <option value="Recolección">Recolección</option>
                            </select>
                            <div className="flex justify-end gap-4">
                                <button type="button" onClick={() => setShowForm(false)} className="bg-gray-500 px-4 py-2 rounded">Cancelar</button>
                                <button type="submit" className="bg-[var(--Vclaro3)] px-4 py-2 rounded">Guardar</button>
                            </div>
                        </form>
                    </div>
                )}
                <div className='text-white w-full'>
                    <div className='flex justify-around items-center text-center rounded-t-md h-14 gap-3 text-xl border border-[var(--Vclaro3)] bg-[var(--Voscuro4)]'>
                        <p>Placa</p>
                        <p>Modelo</p>
                        <p>Capacidad</p>
                        <p>Estado</p>
                        <p>Tipo</p>
                        <p>Acción</p>
                    </div>
                    {camiones.map((camion, index) => (
                        <div key={index} className='flex justify-around items-center text-center h-14 gap-3 border border-[var(--Vclaro3)] text-lg'>
                            <p>{camion.placa}</p>
                            <p>{camion.modelo}</p>
                            <p>{camion.capacidad}</p>
                            <p>{camion.estado_Camion}</p>
                            <p>{camion.Tipo_camion}</p>
                            <div className='flex gap-2 justify-center'>
                                <button className='rounded-md w-10 h-10 bg-[var(--Vclaro3)] text-white hover:scale-105'><MdEdit /></button>
                                <button className='rounded-md w-10 h-10 bg-[var(--Rojo)] text-white hover:scale-105'><AiOutlineDelete /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Camiones;
