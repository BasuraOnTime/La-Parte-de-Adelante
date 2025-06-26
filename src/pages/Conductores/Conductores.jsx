import { useState } from 'react';
import './Conductores.css';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import { MdEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { ItemNavBar } from '../../UI/BotonBack/BotonBack';
import Swal from 'sweetalert2';

const Conductores = () => {
  const [conductores, setConductores] = useState([
    {
      nombre: 'Carlos',
      apellidos: 'Pérez López',
      telefono: '987654321',
      tipo_licencia: 'A2',
      fecha_vencimiento_licencia: '2025-12-31',
      estado: 'Inactivo'
    },
    {
      nombre: 'Ana',
      apellidos: 'Gómez Ruiz',
      telefono: '912345678',
      tipo_licencia: 'B1',
      fecha_vencimiento_licencia: '2026-08-15',
      estado: 'Inactivo'
    }
  ]);

  const [nuevoConductor, setNuevoConductor] = useState({
    nombre: '',
    apellidos: '',
    telefono: '',
    tipo_licencia: '',
    fecha_vencimiento_licencia: '',
    estado: 'Inactivo'
  });

  const [modoEdicion, setModoEdicion] = useState(false);
  const [conductorEditarIndex, setConductorEditarIndex] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoConductor({ ...nuevoConductor, [name]: value });
  };

  const conductoresFiltrados = conductores.filter((conductor) =>
    Object.values(conductor).some(valor =>
      valor.toLowerCase().includes(busqueda.toLowerCase())
    )
  );

  const handleEliminar = (index) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Esta acción eliminará al conductor.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0A372D',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const actualizados = [...conductores];
        actualizados.splice(index, 1);
        setConductores(actualizados);

        Swal.fire('Eliminado', 'El conductor ha sido eliminado.', 'success');
      }
    });
  };

  const driveCancelDriver = () => {
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
      didOpen: () => {
        Swal.showLoading();
      }
    });

    setTimeout(() => {
      Swal.fire({
        title: 'Cancelación',
        text: "Se ha cancelado el ingreso/edición del conductor",
        icon: 'info',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      }).then(() => {
        setShowForm(false);
        resetForm();
        setModoEdicion(false);
        setConductorEditarIndex(null);
      });
    }, 2000);
  };

  const handleSubmitDriver = (e) => {
    e.preventDefault();
    const { nombre, apellidos, telefono, tipo_licencia, fecha_vencimiento_licencia } = nuevoConductor;

    if (!nombre || !apellidos || !telefono || !tipo_licencia || !fecha_vencimiento_licencia) {
      Swal.fire({
        title: 'Error',
        text: 'Todos los campos son obligatorios.',
        icon: 'warning',
        confirmButtonText: 'Entendido',
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
      didOpen: () => {
        Swal.showLoading();
      }
    });

    setTimeout(() => {
      if (modoEdicion) {
        const actualizados = [...conductores];
        actualizados[conductorEditarIndex] = nuevoConductor;
        setConductores(actualizados);
        setModoEdicion(false);
        setConductorEditarIndex(null);
      } else {
        setConductores([...conductores, nuevoConductor]);

        Swal.fire({
          title: 'Conductor registrado',
          text: 'El conductor se ha agregado correctamente',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
      }

      resetForm();
      setShowForm(false);
    }, 2000);
  };

  const resetForm = () => {
    setNuevoConductor({
      nombre: '',
      apellidos: '',
      telefono: '',
      tipo_licencia: '',
      fecha_vencimiento_licencia: '',
      estado: 'Inactivo'
    });
  };

  return (
    <section className='sectFirst'>
      <div className='min-h-max flex flex-col justify-center items-center w-170 h-screen bg-[var(--Voscuro2)] position fixed left-0'>
        <div className="absolute top-4 left-4 z-50">
          <ItemNavBar route="/PanelAdmin" content=" " />
        </div>
        <img className='ImgLogo' src={logoBasuraOnTime} alt="" />
        <p className='FontCursive text-5xl text-center text-white'>BASURA ON TIME</p>
      </div>

      <div className='DivCamion FontGeologica bg-[var(--Voscuro2)] ml-[250px] h-[calc(100vh-40px)] mt-5 overflow-y-auto p-5 relative'>
        <h1 className='text-5xl text-white mb-6'>Gestión de conductores</h1>

        <div className='flex flex-initial gap-30'>
          <button onClick={() => setShowForm(true)} className='group cursor-pointer rounded-md w-40 h-12 bg-[var(--Vclaro3)] text-white text-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'>Agregar</button>
          <input
            type="text"
            className='text-white rounded-md border border-[var(--Vclaro3)] text-center w-120 text-xl'
            placeholder='Buscar conductor...'
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
            <form onSubmit={handleSubmitDriver} className="bg-[var(--Voscuro4)] p-6 rounded-lg shadow-lg w-96 text-white flex flex-col gap-4">
              <h2 className="text-2xl mb-2">{modoEdicion ? 'Editar Conductor' : 'Agregar Conductor'}</h2>
              <input type="text" name="nombre" value={nuevoConductor.nombre} onChange={handleInputChange} placeholder="Nombre" className="p-2 rounded bg-[var(--Voscuro2)] text-white placeholder-white border" />
              <input type="text" name="apellidos" value={nuevoConductor.apellidos} onChange={handleInputChange} placeholder="Apellidos" className="p-2 rounded bg-[var(--Voscuro2)] text-white placeholder-white border" />
              <input type="text" name="telefono" value={nuevoConductor.telefono} onChange={handleInputChange} placeholder="Teléfono" className="p-2 rounded bg-[var(--Voscuro2)] text-white placeholder-white border" />
              <input type="text" name="tipo_licencia" value={nuevoConductor.tipo_licencia} onChange={handleInputChange} placeholder="Tipo de Licencia" className="p-2 rounded bg-[var(--Voscuro2)] text-white placeholder-white border" />
              <input type="date" name="fecha_vencimiento_licencia" value={nuevoConductor.fecha_vencimiento_licencia} onChange={handleInputChange} className="p-2 rounded bg-[var(--Voscuro2)] text-white border" />
              <div className="flex justify-end gap-4">
                                <button type="button" onClick={driveCancelDriver} className="bg-[var(--Rojo)] px-4 py-2 rounded">
                  Cancelar
                </button>
                <button type="submit" className="bg-[var(--Vclaro3)] px-4 py-2 rounded">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        )}

        <div className='text-white w-full mt-6'>
          <div className='grid grid-cols-7 gap-2 text-center items-center text-lg rounded-t-md h-14 p-3 border border-[var(--Vclaro3)] bg-[var(--Voscuro4)]'>
            <p>Nombre</p>
            <p>Apellidos</p>
            <p>Teléfono</p>
            <p>Licencia</p>
            <p>Vencimiento</p>
            <p>Estado</p>
            <p>Acción</p>
          </div>

          {conductoresFiltrados.map((conductor, index) => (
            <div key={index} className='grid grid-cols-7 gap-3 items-center text-center text-lg p-4 border border-[var(--Vclaro3)]'>
              <p className='truncate'>{conductor.nombre}</p>
              <p className='truncate'>{conductor.apellidos}</p>
              <p className='truncate'>{conductor.telefono}</p>
              <p className='truncate'>{conductor.tipo_licencia}</p>
              <p className='truncate'>{conductor.fecha_vencimiento_licencia}</p>
              <p className='truncate'>{conductor.estado}</p>
              <div className='flex gap-2 justify-center'>
                <button
                  onClick={() => {
                    setShowForm(true);
                    setModoEdicion(true);
                    setConductorEditarIndex(index);
                    setNuevoConductor(conductor);
                  }}
                  className='flex justify-center items-center rounded-md w-10 h-10 bg-[var(--Vclaro3)] text-white hover:scale-105'>
                  <MdEdit />
                </button>
                <button
                  onClick={() => handleEliminar(index)}
                  className='flex justify-center items-center rounded-md w-10 h-10 bg-[var(--Rojo)] text-white hover:scale-105'>
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conductores;
