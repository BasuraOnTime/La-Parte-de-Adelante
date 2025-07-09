import { useState } from "react";
import { TruckIcon } from "lucide-react";
import MapaRuta from "../../Layouts/MapGoogle/MapaRuta";


export default function PanelEstadoCamiones({destinolat, destinoLng}) {
  console.log(destinoLng, destinolat)
  return (
    <>
    <div className="p-6 md:p-10 space-y-8 bg-[var(--Voscuro)] text-white min-h-screen font-sans overflow-y-auto">
      <header className="flex items-center gap-4 text-[var(--Vclaro)]">
        <TruckIcon className="w-8 h-8" />
        <h2 className="text-3xl md:text-4xl font-bold">Estado de los Camiones</h2>
      </header>
      <MapaRuta
        origenLat={destinolat}  
        origenLng={destinoLng}
        destinoLat={4.545460}  
        destinoLng={-75.665890}
      />
    </div>
    </>
  );     
}
