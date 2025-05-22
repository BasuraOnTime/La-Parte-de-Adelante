import React, { useState } from "react";
import { ItemNavBar } from '../../UI/BotonBack/BotonBack';

const SolicitudForm = () => {
  const [formData, setFormData] = useState({
    id_solicitud: "",
    zona: "",
    cantidad: "",
    tipo_residuo: "",
    tamano: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    // Aquí podrías hacer una petición a una API o algo similar.
  };

  return (
    <div className="bg-[rgb(0,26,19)] h-100vh flex items-center justify-center p-4 "> 
       <div className="  max-w-md mx-auto mt-10 p-6 bg-gradient-to-br from-green-100 to-white border-4 border-green-300 rounded-[30px] shadow-xl cartoon-style">
      <div className="absolute top-4 left-4 z-50">
        <ItemNavBar route="/" content="<--" />
      </div>
      <h2 className="text-3xl font-bold text-center mb-6 text-green-800">📝 Solicitud Especial</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField label="ID Solicitud" name="id_solicitud" value={formData.id_solicitud} onChange={handleChange} />
        <InputField label="Zona" name="zona" value={formData.zona} onChange={handleChange} />
        <InputField label="Cantidad" name="cantidad" type="number" value={formData.cantidad} onChange={handleChange} />
        <InputField label="Tipo de Residuo" name="tipo_residuo" value={formData.tipo_residuo} onChange={handleChange} />
        <InputField label="Tamaño" name="tamano" value={formData.tamano} onChange={handleChange} />

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition-all"
        >
          Enviar 📨
        </button>
      </form>
    </div>
    </div>
   
  );
};

const InputField = ({ label, name, type = "text", value, onChange }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="mb-1 text-sm font-semibold text-green-800">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className="rounded-full px-4 py-2 border-2 border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800 shadow-inner"
    />
  </div>
);

export default SolicitudForm;
