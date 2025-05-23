import React, { useState } from "react";
import { ItemNavBar } from "../../UI/BotonBack/BotonBack";

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
  };

  return (
    <div className="min-h-screen bg-[rgb(0,26,19)] flex items-center justify-center px-4">
       <div className="absolute top-4 left-4 z-50">
          <ItemNavBar route="/" content=" " />
        </div>
      <div className="relative w-full max-w-md p-8 bg-[#009456c5] border-[5px] border-black rounded-[40px] shadow-[8px_8px_0px_rgba(0,0,0,1)]">
       
        <h2 className="text-4xl font-extrabold text-center mb-8 text-[#0f0303]">
         Solicitud Especial
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <InputField
            label=" ID Solicitud"
            name="id_solicitud"
            value={formData.id_solicitud}
            onChange={handleChange}
          />
          <InputField
            label="Zona"
            name="zona"
            value={formData.zona}
            onChange={handleChange}
          />
          <InputField
            label="Cantidad"
            name="cantidad"
            type="number"
            value={formData.cantidad}
            onChange={handleChange}
          />
          <InputField
            label="Tipo de Residuo"
            name="tipo_residuo"
            value={formData.tipo_residuo}
            onChange={handleChange}
          />
          <InputField
            label="Tamaño"
            name="tamano"
            value={formData.tamano}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-[#d1fd40] hover:bg-[#7dff7d] text-black font-bold py-3 px-6 rounded-full border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all"
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
      className="mb-1 text-base font-bold text-[#000000] drop-shadow-[1px_1px_0_rgba(0,0,0,0.7)]"
    >
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className="rounded-full px-4 py-2 border-[3px] border-black bg-white text-gray-800 shadow-[inset_2px_2px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-[#b6cc74]"
    />
  </div>
);

export default SolicitudForm;
