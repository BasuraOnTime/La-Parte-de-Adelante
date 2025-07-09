import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { FaUserCircle, FaPowerOff, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function PanelConductor() {
  const [encendido, setEncendido] = useState(false);
  const token = localStorage.getItem('token')
  const intervalRef = useRef(null);
  const URL = "http://localhost:10101/truck_location";

  const sendTruckLocation = async (lat, lng) => {
    try {
      const response = await axios.post(URL,{
        lat,
        lng,
        estado: "Activo"
      },{
        headers: { Authorization: `Bearer ${token}` }
      })

      const data = await response.data
      console.log("✅ Respuesta del servidor:", data);
    } catch (err) {
      console.error("❌ Error enviando ubicación:", err);
    }
  };

  const getLocationAndSend = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          sendTruckLocation(latitude, longitude);
        },
        (error) => {
          console.error("❌ Error obteniendo ubicación:", error);
        },
        { enableHighAccuracy: true }
      );
    } 
  };

  const toggleEncendido = () => {
    if (!encendido) {
      getLocationAndSend();
      intervalRef.current = setInterval(getLocationAndSend, 5 * 60 * 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    setEncendido(!encendido);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem('token')
    navigate("/loginConductor");
  };

  return (
    <div className="FontGeologica min-h-screen flex flex-col items-center justify-center bg-[var(--Voscuro)] text-white px-4 py-10 space-y-10">
      {/* Cabecera */}
      <div className="flex items-center gap-4">
        <FaUserCircle size={50} className="text-white" />
        <div>
          <h1 className="text-3xl FontGeologica">Panel de Conductor</h1>
          <p className="text-2xl">Brayan Aguirre</p>
          <p className="text-sm text-gray-300 italic">Control del camión</p>
        </div>
      </div>

      {/* Botón Encender/Apagar */}
      <button
        onClick={toggleEncendido}
        className={`group cursor-pointer flex items-center gap-3 px-6 py-3 rounded-xl text-lg font-semibold transition-colors duration-200
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
