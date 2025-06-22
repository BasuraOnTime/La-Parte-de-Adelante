import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MapWithSearch() {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [search, setSearch] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    mapRef.current = L.map("map").setView([0, 0], 2);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(mapRef.current);
  }, []);

  const buscarDireccion = () => {
    if (!search.trim()) return;

    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        search
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          alert("Dirección no encontrada.");
          return;
        }

        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);

        mapRef.current.setView([lat, lon], 14);

        if (markerRef.current) {
          markerRef.current.setLatLng([lat, lon]);
        } else {
          markerRef.current = L.marker([lat, lon]).addTo(mapRef.current);
        }

        markerRef.current
          .bindPopup(`Dirección: ${search}<br>Lat: ${lat}, Lon: ${lon}`)
          .openPopup();

        const resultado = { direccion: search, latitud: lat, longitud: lon };
        console.log(JSON.stringify(resultado, null, 2));

        if (!history.includes(search)) {
          setHistory((prev) => [...prev, search]);
        }
      })
      .catch(() => alert("Error al buscar la dirección."));
  };

  const handleSelectHistorial = (e) => {
    setSearch(e.target.value);
    buscarDireccion();
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-2">Buscar dirección</h2>
      <input
        type="text"
        placeholder="Ej: Cali, Colombia"
        className="w-full p-2 mb-2 rounded shadow-inner border border-gray-200"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && buscarDireccion()}
      />
      <button
        onClick={buscarDireccion}
        className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Buscar
      </button>

      {history.length > 0 && (
        <div className="mt-4">
          <label className="block mb-1 font-medium">Historial</label>
          <select
            className="w-full p-2 rounded shadow-inner border border-gray-200"
            onChange={handleSelectHistorial}
          >
            <option value="">Selecciona una búsqueda</option>
            {history.map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      )}

      <div id="map" className="mt-6 rounded shadow-md" style={{ height: "400px" }} />
    </div>
  );
}
