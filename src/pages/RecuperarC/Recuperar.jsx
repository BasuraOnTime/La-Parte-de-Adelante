import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function ResetPasswordForm() {
  const URL = "https://express-latest-6gmf.onrender.com/reset-password"; 
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({
    email: "",
    Newpassword: "",
    validatePassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.Newpassword !== formData.validatePassword) {
      setMessage("Las contraseñas no coinciden.");
      return;
    }

    try {
        const res = await axios.put(URL, formData, {
            headers: { Authorization: `Bearer ${token}` }
        });
      if (res.status === 200) {
       localStorage.removeItem("token");
        setMessage("Contraseña actualizada exitosamente.");
        setFormData({ email: "", Newpassword: "", validatePassword: "" });
      } else {
        setMessage("Error al actualizar la contraseña. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error al actualizar la contraseña:", error);
      setMessage("Ocurrió un error al actualizar la contraseña. Por favor, inténtalo de nuevo más tarde.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#002015] px-4">
      <div className="bg-[#00311f] p-8 rounded-3xl shadow-lg w-full max-w-md text-white">
        <h2 className="text-3xl font-bold text-center mb-6 font-serif">Cambiar contraseña</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              required
              placeholder="Correo electrónico"
              className="w-full px-4 py-2 rounded-md bg-[#083d2d] border border-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              required
              placeholder="Nueva contraseña"
              className="w-full px-4 py-2 rounded-md bg-[#083d2d] border border-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              required
              placeholder="Confirmar nueva contraseña"
              className="w-full px-4 py-2 rounded-md bg-[#083d2d] border border-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-green-600 hover:bg-green-700 transition duration-200 text-white font-semibold"
          >
            Actualizar contraseña
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-sm text-green-300">{message}</p>
        )}
        <div className="mt-4 text-center">
          <a href="/login" className="text-sm text-white underline hover:text-green-400">
            ¿Recordaste tu contraseña?
          </a>
        </div>
      </div>
    </div>
  );
}
