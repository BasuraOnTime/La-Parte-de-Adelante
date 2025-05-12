import React, { useState } from 'react';
import {ItemNavBar} from '../../UI/BotonBack/BotonBack';

const UserProfileApp = () => {
  const [direccion, setDireccion] = useState('Calle Falsa 123, Ciudad');
  const [showModal, setShowModal] = useState(false);

  const handleEliminarCuenta = () => {
    // Aquí iría la lógica real de eliminación
    console.log('Cuenta eliminada');
    setShowModal(false);
  };

  return (
    
    <div className="min-h-screen bg-[rgb(240,250,245)] p-8 flex justify-center">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-9xl flex flex-col md:flex-row overflow-hidden">
         <div>
                <div><ItemNavBar route='/' content='<--' /></div> 
                
              </div>
        
        {/* Sidebar Perfil */}
        <div className="bg-[rgb(0,50,37)] text-[rgb(204,238,80)] p-6 w-full md:w-1/3 flex flex-col items-center">
          <img
            src="https://via.placeholder.com/120"
            alt="Foto de perfil"
            className="w-28 h-28 rounded-full border-4 border-[rgb(204,238,80)]"
          />
          <h2 className="text-2xl font-bold mt-4">Usuario</h2>
          <p className="text-[rgb(114,175,71)]">Apellido</p>
          <p className="text-sm mt-2 text-center">+34 600 000 000</p>

          <button className="mt-6 bg-[rgb(204,238,80)] text-[rgb(0,50,37)] px-6 py-2 rounded-full font-semibold hover:bg-lime-300 transition">
            Editar Perfil
          </button>
        </div>

        {/* Contenido principal */}
        <div className="p-6 w-full md:w-2/3 text-[rgb(0,50,37)] space-y-6">
          <h2 className="text-2xl font-bold mb-4">Información Personal</h2>

          <div>
            <label className="block text-sm font-medium text-gray-600">Correo electrónico</label>
            <p className="mt-1 text-lg">usuario@ejemplo.com</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Nombres</label>
            <p className="mt-1 text-lg">Juan Carlos</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Apellidos</label>
            <p className="mt-1 text-lg">Pérez Gómez</p>
          </div>

          {/* Dirección con mapa editable */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Dirección</label>
            <input
              type="text"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              className="w-full px-4 py-2 mb-3 border rounded-lg text-[rgb(0,50,37)]"
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

          {/* Contraseña con botón editar */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Contraseña</label>
            <div className="flex items-center justify-between">
              <p className="mt-1 text-lg">••••••••</p>
              <button className="ml-4 text-sm bg-[rgb(204,238,80)] text-[rgb(0,50,37)] px-3 py-1 rounded-full font-medium hover:bg-lime-300 transition">
                Editar
              </button>
            </div>
          </div>

          {/* Botón eliminar cuenta */}
          <div className="pt-6">
            <button
              onClick={() => setShowModal(true)}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-full transition"
            >
              Eliminar cuenta
            </button>
          </div>
        </div>
      </div>

      {/* Modal de confirmación */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center space-y-4">
            <h3 className="text-xl font-semibold text-[rgb(0,50,37)]">¿Estás seguro?</h3>
            <p className="text-sm text-gray-600">Esta acción eliminará tu cuenta permanentemente.</p>
            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-200 px-4 py-2 rounded font-medium hover:bg-gray-300"
              >
                Cancelar
              </button>
              <button
                onClick={handleEliminarCuenta}
                className="bg-red-500 text-white px-4 py-2 rounded font-medium hover:bg-red-600"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileApp;
