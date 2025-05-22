import { useState } from "react";
import { MapPin, MapPinOff } from "lucide-react";
import { ItemNavBar } from "../../UI/BotonBack/BotonBack";

export default function DriverLocationToggle() {
  const [locationEnabled, setLocationEnabled] = useState(false);

  const toggleLocation = () => {
    // Aquí puedes integrar la API de geolocalización
    setLocationEnabled((prev) => !prev);
  };

  return (
    <div className="bg-[rgb(0,26,19)] relative flex items-center justify-center min-h-screen   pt-20">
      {/* Botón de regreso */}
      <div className="absolute top-4 left-4 z-50">
        <ItemNavBar route="/" content="<--" />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm text-center">
        {/* Perfil del conductor */}
        <div className="text-[rgb(204,238,80)] p-6 flex flex-col items-center">
          <img
            src="https://via.placeholder.com/120"
            alt="Foto de perfil"
            className="w-28 h-28 rounded-full border-4 border-[rgb(204,238,80)]"
          />
          <h2 className="text-2xl font-bold mt-4 text-black">Usuario</h2>
          <p className="text-[rgb(114,175,71)]">Conductor activo</p>
        </div>

        {/* Estado de ubicación */}
        <h1 className="text-2xl font-semibold mb-4">Ubicación del Conductor</h1>

        <div className="mb-6">
          {locationEnabled ? (
            <div className="text-green-600 flex flex-col items-center">
              <MapPin className="w-12 h-12 mb-2" />
              <p className="font-medium">Ubicación activada</p>
            </div>
          ) : (
            <div className="text-red-500 flex flex-col items-center">
              <MapPinOff className="w-12 h-12 mb-2" />
              <p className="font-medium">Ubicación desactivada</p>
            </div>
          )}
        </div>

        {/* Botón toggle */}
        <button
          onClick={toggleLocation}
          className={`w-full py-2 px-4 rounded-xl font-semibold transition duration-300
            ${locationEnabled ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}
            text-white`}
        >
          {locationEnabled ? "Desactivar ubicación" : "Activar ubicación"}
        </button>
      </div>
    </div>
  );
}
