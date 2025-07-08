import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { MdEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { BotonBack } from "../../UI/BotonBack/BotonBack";
import "./Camiones.css";

const Camiones = () => {
  const [camiones, setCamiones] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [camionEditar, setCamionEditar] = useState(null);
  const [formData, setFormData] = useState({
    placa: "",
    modelo: "",
    capacidad: "",
    tipo: "",
    estado: "",
  });
  const [busqueda, setBusqueda] = useState("");

  const token = localStorage.getItem("token");
  const URL = "https://express-latest-6gmf.onrender.com/camiones"; // Cambia si es necesario

  // Cargar camiones desde el backend
  useEffect(() => {
    const fetchCamiones = async () => {
      try {
        const response = await axios.get(URL, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCamiones(response.data);
      } catch (error) {
        console.error("Error al cargar camiones:", error);
        Swal.fire("Error", "No se pudieron cargar los camiones", "error");
      }
    };
    fetchCamiones();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const limpiarFormulario = () => {
    setFormData({
      placa: "",
      modelo: "",
      capacidad: "",
      tipo: "",
      estado: "",
    });
    setModoEdicion(false);
    setCamionEditar(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.placa || !formData.modelo || !formData.capacidad) {
      return Swal.fire("Campos requeridos", "Por favor completa todos los campos", "warning");
    }

    try {
      if (modoEdicion) {
        await axios.put(`${URL}/${camionEditar._id}`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        Swal.fire("Camión actualizado", "", "success");
      } else {
        await axios.post(URL, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        Swal.fire("Camión registrado", "", "success");
      }

      // Actualizar lista
      const res = await axios.get(URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCamiones(res.data);
      limpiarFormulario();
    } catch (error) {
      console.error("Error guardando camión:", error);
      Swal.fire("Error", "No se pudo guardar el camión", "error");
    }
  };

  const handleEditar = (camion) => {
    setModoEdicion(true);
    setCamionEditar(camion);
    setFormData({
      placa: camion.placa,
      modelo: camion.modelo,
      capacidad: camion.capacidad,
      tipo: camion.tipo,
      estado: camion.estado,
    });
  };

  const handleEliminar = async (id) => {
    const result = await Swal.fire({
      title: "¿Eliminar este camión?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${URL}/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setCamiones(camiones.filter((camion) => camion._id !== id));
        Swal.fire("Camión eliminado", "", "success");
      } catch (error) {
        console.error("Error eliminando camión:", error);
        Swal.fire("Error", "No se pudo eliminar el camión", "error");
      }
    }
  };

  const camionesFiltrados = camiones.filter((camion) =>
    Object.values(camion)
      .join(" ")
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  return (
    <section className="sectFirst glass min-h-screen flex flex-col justify-center items-center p-4">

      <div className="absolute top-4 left-4 z-50">
               <BotonBack route="/PanelAdmin" content=" " />
             </div>

      <h1 className="FontCursive text-4xl md:text-6xl text-white mb-8 text-center">
        Gestión de Camiones
      </h1>

      <form
        className="FontGeologica flex flex-col md:flex-row gap-4 bg-[var(--Voscuro2)] p-6 rounded-3xl mb-6 w-full max-w-4xl"
        onSubmit={handleSubmit}
      >
        {["placa", "modelo", "capacidad", "tipo", "estado"].map((campo) => (
          <input
            key={campo}
            name={campo}
            placeholder={campo.charAt(0).toUpperCase() + campo.slice(1)}
            className="rounded-md w-full md:w-40 h-10 text-center bg-[var(--Vclaro2)] text-white text-sm md:text-lg"
            value={formData[campo]}
            onChange={handleChange}
          />
        ))}
        <button
          type="submit"
          className="rounded-md bg-[var(--Vclaro)] text-white px-6 py-2 hover:scale-105 transition-all"
        >
          {modoEdicion ? "Actualizar" : "Agregar"}
        </button>
      </form>

      <input
        type="text"
        placeholder="Buscar camión..."
        className="rounded-md w-full max-w-lg h-10 text-center mb-6 bg-[var(--Vclaro2)] text-white placeholder:text-center"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="grid gap-4 w-full max-w-5xl">
        {camionesFiltrados.map((camion) => (
          <div
            key={camion._id}
            className="FontGeologica bg-[var(--Voscuro2)] text-white p-4 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="grid grid-cols-2 gap-2 w-full md:grid-cols-5">
              <span><strong>Placa:</strong> {camion.placa}</span>
              <span><strong>Modelo:</strong> {camion.modelo}</span>
              <span><strong>Capacidad:</strong> {camion.capacidad}</span>
              <span><strong>Tipo:</strong> {camion.tipo}</span>
              <span><strong>Estado:</strong> {camion.estado}</span>
            </div>
            <div className="flex gap-4 justify-center">
              <MdEdit className="cursor-pointer w-6 h-6 text-yellow-400" onClick={() => handleEditar(camion)} />
              <AiOutlineDelete className="cursor-pointer w-6 h-6 text-red-500" onClick={() => handleEliminar(camion._id)} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Camiones;
