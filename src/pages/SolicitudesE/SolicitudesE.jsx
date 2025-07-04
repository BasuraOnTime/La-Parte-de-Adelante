import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { ItemNavBar } from "../../UI/BotonBack/BotonBack";
import logoBasuraOnTime from "../../assets/img/icons/logoBasuraOnTime.png";

const SolicitudForm = () => {
  const token = localStorage.getItem("token");
  const URL = "http://localhost:10101/requests";

  const [zona, setZona] = useState("");
  const [fecha_solicitud, setFechaSolicitud] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [tipo_residuo, setTipoResiduo] = useState("");
  const [tamano, setTamano] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor inicia sesión para enviar la solicitud.",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    Swal.fire({
      title: "Enviando solicitud...",
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const formData = { zona, fecha_solicitud, cantidad, tipo_residuo, tamano };
      await axios.post(URL, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      Swal.close();
      Swal.fire({
        icon: "success",
        title: "Solicitud enviada",
        text: "Tu solicitud fue enviada correctamente",
        timer: 2000,
      });

      setZona("");
      setFechaSolicitud("");
      setCantidad("");
      setTipoResiduo("");
      setTamano("");

    } catch (error) {
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un problema al enviar la solicitud.",
      });
      console.error(error);
    }
  };

  return (
    <section className="sectFirst glass min-h-screen flex flex-col md:flex-row justify-center items-center p-4 md:gap-20">

      {/* Botón de volver */}
      <div className="absolute top-4 left-4 z-50 scale-80 md:scale-100">
        <ItemNavBar route="/" content="Volver" />
      </div>

      {/* Logo y texto */}
      <div className="flex flex-col justify-center items-center mb-6 md:mb-0">
        <img className="w-24 h-24 mb-4 md:w-[200px] md:h-[200px]" src={logoBasuraOnTime} alt="Logo" />
        <p className="FontCursive text-3xl md:text-6xl text-center text-white">BASURA ON TIME</p>
      </div>

      {/* Formulario */}
      <div className="FontGeologica flex flex-col justify-center items-center gap-4 bg-[var(--Voscuro2)] w-full max-w-[450px] p-6 rounded-3xl md:w-[600px] md:gap-4 md:rounded-4xl md:p-8">

        <p className="FontCursive text-2xl md:text-5xl p-4 text-white text-center">Solicitud Especial</p>

        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          <InputField label="Zona" value={zona} onChange={(e) => setZona(e.target.value)} />
          <InputField label="Fecha de Solicitud" type="date" value={fecha_solicitud} onChange={(e) => setFechaSolicitud(e.target.value)} />
          <InputField label="Cantidad" type="number" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
          <InputField label="Tipo de Residuo" value={tipo_residuo} onChange={(e) => setTipoResiduo(e.target.value)} />
          <InputField label="Tamaño" value={tamano} onChange={(e) => setTamano(e.target.value)} />

          <button
            type="submit"
            className="rounded-md w-full h-8 md:h-10 bg-[var(--Vclaro)] text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95 text-sm md:text-lg"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

const InputField = ({ label, type = "text", value, onChange }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={label}
    className="rounded-md bg-[var(--Vclaro2)] w-full h-8 md:h-10 text-center placeholder:text-center text-white text-sm md:text-lg"
  />
);

export default SolicitudForm;
