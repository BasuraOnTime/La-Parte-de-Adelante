import { useState } from 'react';
import './Camiones.css';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import { MdEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { ItemNavBar } from '../../UI/BotonBack/BotonBack';
import Swal from 'sweetalert2';

const Camiones = () => {

    const driveCancelTruck = () => {
        if (!modoEdicion) {
            setShowForm(false);
            resetForm();
            return;
        }

        Swal.fire({
            title: 'Procesando...',
            text: 'Estamos procesando tu solicitud',
            allowEscapeKey: false,
            allowOutsideClick: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => { Swal.showLoading(); }
        });

        setTimeout(() => {
            Swal.fire({
                title: 'Cancelación',
                text: "Se ha cancelado el ingreso o edición del camión",
                icon: 'info',
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false
            }).then(() => {
                setShowForm(false);
                resetForm();
                setModoEdicion(false);
                setCamionEditarIndex(null);
            });
        }, 2000);
    };

    const handleSubmitTruck = (e) => {
        e.preventDefault();

        const { placa, modelo, capacidad, estado_Camion, Tipo_camion } = nuevoCamion;
        if (!placa || !modelo || !capacidad || !estado_Camion || !Tipo_camion) {
            Swal.fire({
                title: 'Error',
                text: 'Todos los campos son obligatorios.',
                icon: 'warning',
                confirmButtonColor: '#0A372D',
            });
            return;
        }

        Swal.fire({
            title: 'Procesando...',
            text: 'Estamos procesando tu solicitud',
            allowEscapeKey: false,
            allowOutsideClick: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => { Swal.showLoading(); }
        });

        setTimeout(() => {
            if (modoEdicion) {
                const camionesActualizados = [...camiones];
                camionesActualizados[camionEditarIndex] = nuevoCamion;
                setCamiones(camionesActualizados);
                setModoEdicion(false);
                setCamionEditarIndex(null);
            } else {
                setCamiones([...camiones, nuevoCamion]);
                Swal.fire({
                    title: 'Camión registrado',
                    text: 'El camión se ha agregado correctamente',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false,
                    timerProgressBar: true
                });
            }
            setShowForm(false);
            resetForm();
        }, 2000);
    };

    const resetForm = () => {
        setNuevoCamion({
            placa: '',
            modelo: '',
            capacidad: 'Alta',
            estado_Camion: 'Activo',
            Tipo_camion: 'Especial',
            marca: ''
        });
    };

    const [modoEdicion, setModoEdicion] = useState(false);
    const [camionEditarIndex, setCamionEditarIndex] = useState(null);
    const [busqueda, setBusqueda] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [nuevoCamion, setNuevoCamion] = useState({
        placa: '',
        modelo: '',
        capacidad: 'Alta',
        estado_Camion: 'Activo',
        Tipo_camion: 'Especial',
        marca: '',
    });

    const [camiones, setCamiones] = useState([
        {
            placa: 'ABC-123',
            modelo: 'Modelo X',
            capacidad: 'Alta',
            estado_Camion: 'Activo',
            Tipo_camion: 'Especial',
            marca: 'Marca A',
        },
        {
            placa: 'DEF-456',
            modelo: 'Modelo Y',
            capacidad: 'Media',
            estado_Camion: 'Inactivo',
            Tipo_camion: 'normal',
            marca: 'Marca B',
        }
    ]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoCamion({ ...nuevoCamion, [name]: value });
    };

    const camionesFiltrados = camiones.filter(camion =>
        Object.values(camion).some(valor =>
            valor.toLowerCase().includes(busqueda.toLowerCase())
        )
    );

    const handleEliminar = (index) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Esta acción eliminará el camión.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0A372D',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                const camionesActualizados = [...camiones];
                camionesActualizados.splice(index, 1);
                setCamiones(camionesActualizados);
                Swal.fire('Eliminado', 'El camión ha sido eliminado.', 'success');
            }
        });
    };

    return (
        <section className="sectFirst min-h-screen flex flex-col md:flex-row bg-[var(--Voscuro2)]">

            {/* Sidebar PC */}
            <div className="hidden md:flex flex-col justify-center items-center w-28 xl:w-90 2xl:w-140 h-screen bg-[var(--Voscuro2)] fixed left-0 z-10">

                <div className="absolute top-4 left-4 z-50">
                    <ItemNavBar route="/PanelAdmin" content=" " />
                </div>

                <img
                    className="w-20 xl:w-40 2xl:w-90"
                    src={logoBasuraOnTime}
                    alt="Logo Basura On Time"
                />

                <p className="FontCursive text-3xl xl:text-4xl 2xl:text-5xl text-center text-white">
                    BASURA ON TIME
                </p>

            </div>

            {/* Header móvil */}
            <div className="md:hidden bg-[var(--Voscuro2)] w-full flex flex-col items-center pt-8 pb-5 fixed top-0 left-0 z-50">

                <div className="absolute top-2 left-2 z-50 scale-80">
                    <ItemNavBar route="/PanelAdmin" content=" " />
                </div>

                <img src={logoBasuraOnTime} alt="Logo Basura On Time" className="w-28 h-auto mt-2" />

                <p className="FontCursive text-3xl text-white mt-2">BASURA ON TIME</p>

            </div>


            {/* Contenido */}
            <div className="flex-1 flex flex-col items-center justify-start ml:[28] xl:ml-[60px]  2xl:ml-[180px] px-4 pt-28 md:pt-6 pb-6 FontGeologica relative w-full overflow-y-auto">

                <div className="mt-30 sm:mt-15 xl:ml-70 2xl:ml-100 bg-[var(--Voscuro2)] p-6 rounded-lg w-full max-w-[800px] max-h-[70vh] overflow-y-auto overflow-x-hidden">

                    <h1 className="text-lg md:text-5xl text-white mb-6 text-center">Gestión de camiones</h1>

                    <div className="flex flex-col md:flex-row gap-8 mb-6">
                        <button onClick={() => setShowForm(true)} className="group cursor-pointer rounded-md w-full md:w-40 h-12 bg-[var(--Vclaro3)] text-white text-sm md:text-xl transition-all hover:scale-105 hover:shadow-2xl active:scale-95">
                            Agregar
                        </button>
                        <input
                            type="text"
                            className="text-white rounded-md border border-[var(--Vclaro3)] text-center w-full h-12 md:w-120 text-sm md:text-xl"
                            placeholder="Buscar camión..."
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                        />
                    </div>

                    <div className="w-full overflow-x-auto text-white">

                        {/* Títulos solo en escritorio */}
                        <div className="hidden md:grid grid-cols-7 gap-2 text-center items-center text-lg rounded-t-md h-14 p-3 border border-[var(--Vclaro3)] bg-[var(--Voscuro4)] min-w-[600px]">
                            <p>Placa</p>
                            <p>Modelo</p>
                            <p>Capacidad</p>
                            <p>Estado</p>
                            <p>Tipo</p>
                            <p>Marca</p>
                            <p>Acción</p>
                        </div>

                        {camionesFiltrados.map((camion, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-7 gap-3 md:gap-2 text-left md:text-center text-sm md:text-lg p-4 border border-[var(--Vclaro3)] min-w-[220px] md:min-w-0">

                                <div>
                                    <span className="font-bold md:hidden">Placa: </span>{camion.placa}
                                </div>
                                <div>
                                    <span className="font-bold md:hidden">Modelo: </span>{camion.modelo}
                                </div>
                                <div>
                                    <span className="font-bold md:hidden">Capacidad: </span>{camion.capacidad}
                                </div>
                                <div>
                                    <span className="font-bold md:hidden">Estado: </span>{camion.estado_Camion}
                                </div>
                                <div>
                                    <span className="font-bold md:hidden">Tipo: </span>{camion.Tipo_camion}
                                </div>
                                <div>
                                    <span className="font-bold md:hidden">Marca: </span>{camion.marca}
                                </div>

                                <div className="flex gap-2 md:justify-center justify-start mt-2 md:mt-0">
                                    <button
                                        onClick={() => { setShowForm(true); setModoEdicion(true); setCamionEditarIndex(index); setNuevoCamion(camion); }}
                                        className="flex justify-center items-center rounded-md w-8 h-8 md:w-10 md:h-10 bg-[var(--Vclaro3)] text-white hover:scale-105"
                                    >
                                        <MdEdit />
                                    </button>
                                    <button
                                        onClick={() => handleEliminar(index)}
                                        className="flex justify-center items-center rounded-md w-8 h-8 md:w-10 md:h-10 bg-[var(--Rojo)] text-white hover:scale-105"
                                    >
                                        <AiOutlineDelete />
                                    </button>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {showForm && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
                    <form onSubmit={handleSubmitTruck} className="bg-[var(--Voscuro4)] p-6 rounded-lg shadow-lg w-96 text-white flex flex-col gap-4">
                        <h2 className="text-2xl mb-2">{modoEdicion ? 'Editar Camión' : 'Agregar Camión'}</h2>
                        <input type="text" name="placa" value={nuevoCamion.placa} onChange={handleInputChange} placeholder="Placa" required className="p-2 rounded bg-[var(--Voscuro2)] text-white placeholder-white border" />
                        <input type="text" name="modelo" value={nuevoCamion.modelo} onChange={handleInputChange} placeholder="Modelo" required className="p-2 rounded bg-[var(--Voscuro2)] text-white placeholder-white border" />
                        <select name="capacidad" value={nuevoCamion.capacidad} onChange={handleInputChange} className="p-2 rounded bg-[var(--Voscuro2)] text-white border">
                            <option value="Alta">Alta</option>
                            <option value="Media">Media</option>
                            <option value="Baja">Baja</option>
                        </select>
                        <select name="estado_Camion" value={nuevoCamion.estado_Camion} onChange={handleInputChange} className="p-2 rounded bg-[var(--Voscuro2)] text-white border">
                            <option value="Activo">Activo</option>
                            <option value="Inactivo">Inactivo</option>
                            <option value="Mantenimiento">Mantenimiento</option>
                        </select>
                        <select name="Tipo_camion" value={nuevoCamion.Tipo_camion} onChange={handleInputChange} className="p-2 rounded bg-[var(--Voscuro2)] text-white border">
                            <option value="Especial">Especial</option>
                            <option value="Recolección">Recolección</option>
                        </select>
                        <input type="text" name="marca" value={nuevoCamion.marca} onChange={handleInputChange} placeholder="Marca" required className="p-2 rounded bg-[var(--Voscuro2)] text-white placeholder-white border" />
                        <div className="flex justify-end gap-4">
                            <button type="button" onClick={driveCancelTruck} className="bg-[var(--Rojo)] px-4 py-2 rounded">Cancelar</button>
                            <button type="submit" className="bg-[var(--Vclaro3)] px-4 py-2 rounded">Guardar</button>
                        </div>
                    </form>
                </div>
            )}
        </section>
    );
};

export default Camiones;
