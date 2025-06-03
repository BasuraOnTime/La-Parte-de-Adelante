import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ItemNavBar } from '../../UI/BotonBack/BotonBack';
import { Pencil, Trash2, MapPin, Mail, User, Phone, Lock } from 'lucide-react';
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png';
import Perfil from '../../assets/img/icons/perfil.jpg'; // Foto de perfil
import './Usuario.css';

const UserProfileApp = () => {
  const URL = 'http://localhost:10101/profile';
  const token = localStorage.getItem('token');
  const [direccion, setDireccion] = useState('Calle Falsa 123, Ciudad');
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [Telefono, setTelefono] = useState('');

  const [passwordConfirm, setPasswordConfirm] = useState('');

  useEffect(() => {
    if (token) {
      axios.get(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => {
          const { email, nombre, apellido, telefono, direccion } = response.data;
          setEmail(email);
          setNombre(nombre);
          setApellido(apellido);
          setTelefono(telefono);
          setDireccion(direccion);
        })
        .catch(error => console.error('Error al obtener los datos del usuario:', error));
    } else {
      alert('No se pudo obtener la información del usuario. Por favor, inicia sesión.');
    }
  }, [token]);

  const handleEliminarCuenta = () => {
    if (passwordConfirm.trim() === '') {
      alert('Por favor, introduce tu contraseña para confirmar.');
      return;
    }
    console.log('Cuenta eliminada');
    setShowModal(false);
    setPasswordConfirm('');
  };

  const handleGuardarCambios = () => {
    console.log('Datos actualizados:', { email, nombre, apellido, Telefono });
    setShowEditModal(false);
  };

  return (
    <div className="min-h-screen bg-[var(--Voscuro)] p-8 flex justify-center">
      <div className="absolute top-4 left-4 z-50">
        <ItemNavBar route="/" content="<--" />
      </div>

      <div className="bg-[var(--Voscuro2)] rounded-4xl shadow-lg w-full max-w-7xl flex flex-col md:flex-row overflow-hidden">
        {/* Sidebar Perfil */}
        <div className="bg-[var(--Vclaro2)] flex flex-col items-center justify-center h-full md:w-1/3 text-center rounded-l-4xl border-r-2 border-[var(--Voscuro)] px-10">
          <img
            src={logoBasuraOnTime}
            alt="Logo Basura On Time"
            className="w-40 mb-6"
          />
          <p className="FontCursive text-4xl text-white font-semibold">Basura On Time</p>
        </div>


        {/* Contenido principal */}
        <div className="bg-white p-8 md:w-2/3 rounded-r-4xl flex flex-col gap-6 text-[var(--Voscuro)]">
          {/* Foto perfil y nombre */}
          <div className="flex items-center gap-6 mb-6">
            <img
              src={Perfil}
              alt="Foto de perfil"
              className="w-28 h-28 rounded-full object-cover"
              style={{ objectPosition: 'center' }}
            />
            <h2 className="text-4xl font-bold">{nombre} {apellido}</h2> {/* Nombre más grande */}
          </div>

          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <User size={22} /> Información Personal
            </h3>
            <button
              onClick={() => setShowEditModal(true)}
              className="rounded-md w-full max-w-[140px] h-10 bg-[var(--Vclaro)] text-white group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95 flex items-center justify-center gap-2 font-semibold"
            >
              <Pencil size={18} />
              Editar
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 flex items-center gap-1">
              <Mail size={16} /> Correo electrónico
            </label>
            <p className="mt-1 text-lg">{email}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 flex items-center gap-1">
              <User size={16} /> Nombres
            </label>
            <p className="mt-1 text-lg">{nombre}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 flex items-center gap-1">
              <User size={16} /> Apellidos
            </label>
            <p className="mt-1 text-lg">{apellido}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 flex items-center gap-1">
              <Phone size={16} /> Teléfono
            </label>
            <p className="mt-1 text-lg">{Telefono}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2 flex items-center gap-1">
              <MapPin size={16} /> Dirección
            </label>
            <input
              type="text"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              className="w-full px-4 py-2 mb-3 border rounded-lg text-[var(--Voscuro)]"
              placeholder="Escribe tu dirección"
            />
            <div className="w-full h-48">
              <iframe
                title="Mapa de ubicación"
                width="100%"
                height="100%"
                className="rounded-lg"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps?q=${encodeURIComponent(direccion)}&output=embed`}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 flex items-center gap-1">
              <Lock size={16} /> Contraseña
            </label>
            <p className="mt-1 text-lg">••••••••</p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="rounded-md w-full h-10 bg-[var(--Rojo)] text-white group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95 flex items-center justify-center gap-2 font-semibold mt-8"
          >
            <Trash2 size={22} />
            Eliminar cuenta
          </button>
        </div>
      </div>

      {/* Modal Confirmación de Eliminación */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center space-y-4">
            <h3 className="text-xl font-semibold text-[var(--Voscuro)]">¿Estás seguro?</h3>
            <p className="text-sm text-gray-600">Esta acción eliminará tu cuenta permanentemente.</p>

            <input
              type="password"
              placeholder="Introduce tu contraseña"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-[var(--Voscuro)]"
            />

            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={() => {
                  setShowModal(false);
                  setPasswordConfirm('');
                }}
                className="rounded-md w-full max-w-[120px] h-10 bg-gray-300 text-[var(--Voscuro2)] group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95 font-semibold"
              >
                Cancelar
              </button>
              <button
                onClick={handleEliminarCuenta}
                disabled={!passwordConfirm.trim()}
                className={`rounded-md w-full max-w-[120px] h-10 text-white group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95 font-semibold ${passwordConfirm.trim() ? 'bg-[var(--Rojo)]' : 'bg-[var(--Rojo)]'
                  }`}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Edición */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full space-y-4">
            <h3 className="text-xl font-semibold text-[var(--Voscuro)] text-center">Editar Información</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md text-[var(--Voscuro)]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md text-[var(--Voscuro)]"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Apellido</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md text-[var(--Voscuro)]"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Teléfono</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-md text-[var(--Voscuro)]"
                value={Telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={() => setShowEditModal(false)}
                className="rounded-md w-full max-w-[140px] h-10 bg-gray-300 text-[var(--Voscuro2)] font-semibold hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleGuardarCambios}
                className="rounded-md w-full max-w-[140px] h-10 bg-[var(--Vclaro)] text-white font-semibold hover:bg-[var(--Vclaro)]/90"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileApp;
