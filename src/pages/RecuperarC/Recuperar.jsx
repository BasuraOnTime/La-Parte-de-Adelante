import React, { useState } from "react";

export default function ResetPasswordForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Contraseña actualizada correctamente.");
      } else {
        setMessage(data.message || "Error al actualizar la contraseña.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Error del servidor.");
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
