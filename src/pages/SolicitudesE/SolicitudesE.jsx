import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { ItemNavBar } from "../../UI/BotonBack/BotonBack";

const SolicitudForm = () => {
  const token = localStorage.getItem("token");
  const URL = "http://localhost:10101/requests";
  const [zona, setZona] = useState("");
  const [fecha_solicitud, setFechaSolicitud] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [tipo_residuo, setTipoResiduo] = useState("");
  const [tamano, setTamano] = useState("");

const handleZonaChange = (e) => {
  setZona(e.target.value);
}
const handleFechaSolicitudChange = (e) => {
  setFechaSolicitud(e.target.value);
} 
const handleCantidadChange = (e) => {
  setCantidad(e.target.value);
}
const handleTipoResiduoChange = (e) => {
  setTipoResiduo(e.target.value);
}
const handleTamanoChange = (e) => {
  setTamano(e.target.value);
}
  const handleSubmit = async (e) => {
    const formData = {
      zona,
      fecha_solicitud,
      cantidad,
      tipo_residuo,
      tamano
    }
    e.preventDefault();
    console.log("Datos enviados:", formData);
    try{
      console.log("Token:", token);
      if (token) {
        const response = await axios.post(URL, formData ,{
        headers: {
          'Authorization' : `Bearer ${token}`
        },  
      })
      alert("Solicitud enviada correctamente");
      } else {
        alert("No se pudo enviar la solicitud, por favor inicia sesión");
      }
    } catch (error) {
      console.log("Error al enviar la solicitud:", error);
    }
  };

  return (
    <div className="FontGeologica min-h-screen bg-[var(--Voscuro)] flex items-center justify-center px-4">
       <div className="absolute top-4 left-4 z-50">
          <ItemNavBar route="/" content=" " />
        </div>
      <div className="relative w-full max-w-md p-8 bg-[var(--Voscuro2)] rounded-4xl">
       
        <h2 className=" FontCursive text-4xl not-even:text-center mb-8 text-white">
         Solicitud Especial
        </h2>
        <form className="space-y-5">
          <InputField 
            label="Zona"
            name="zona"
            onChange={handleZonaChange}
          />
          <InputField
            label="fecha de Solicitud"
            name="fecha_solicitud"
            onChange={handleFechaSolicitudChange}
          />
          <InputField
            label="Cantidad"
            name="cantidad"
            type="number"
            onChange={handleCantidadChange}
          />
          <InputField
            label="Tipo de Residuo"
            name="tipo_residuo"
            onChange={handleTipoResiduoChange}
          />
          <InputField
            label="Tamaño"
            name="tamano"
            onChange={handleTamanoChange}
          />

          <button
            type="submit"
            className="rounded-md w-96 h-10 bg-[var(--Vclaro)] text-white group cursor-pointer transition-all duration-300
             ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95 mt-3"
            onClick={handleSubmit}
          >
            Enviar 
          </button>
        </form>
      </div>
    </div>
  );
};

const InputField = ({ label, name, type = "text", value, onChange }) => (
  <div className="flex flex-col">
    <label
      htmlFor={name}
      className="mb-1 text-white"
    >
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      placeholder={label}
      className="rounded-md px-4 py-2 bg-[var(--Vclaro2)] text-white placeholder:text-center"
    />
  </div>
);


export default SolicitudForm;
