import React, { useState } from "react";
import { FaUserCircle, FaPowerOff, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function PanelConductor() {
  const [encendido, setEncendido] = useState(false);
  const navigate = useNavigate();

  const toggleEncendido = () => {
    setEncendido(!encendido);
    console.log(encendido ? "Apagado" : "Encendido");
  };

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    navigate("/"); // 👈 redirige al home
  };

  return (
    <div className="FontGeologica min-h-screen flex flex-col items-center justify-center bg-[var(--Voscuro)] text-white px-4 py-10 space-y-10">
      {/* Cabecera */}
      <div className="flex items-center gap-4">
        <FaUserCircle size={50} className="text-white" />
        <div>
          <h1 className="text-3xl FontGeologica">Panel de Conductor</h1>
          <p className="text-2xl">brayan aguirre</p>
          <p className="text-sm text-gray-300 italic">Control del camión</p>
        </div>
      </div>

      {/* Botón Encender/Apagar */}
      <button
        onClick={toggleEncendido}
        className={` group cursor-pointer flex items-center gap-3 px-6 py-3 rounded-xl text-lg font-semibold transition-colors duration-200
          ${encendido ? "bg-[var(--Rojo)]" : "bg-[var(--Voscuro2)]"}`}
      >
        <FaPowerOff size={22} />
        {encendido ? "Apagar camión" : "Encender camión"}
      </button>

      {/* Botón cerrar sesión */}
      <button
        onClick={cerrarSesion}
        className="group cursor-pointer flex items-center gap-3 bg-[var(--Rojo)] text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
      >
        <FaSignOutAlt size={20} />
        Cerrar sesión
      </button>
    </div>
  );
}
