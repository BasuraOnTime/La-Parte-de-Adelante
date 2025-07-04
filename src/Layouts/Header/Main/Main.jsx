import React from 'react'
import TextBox from '../../../UI/Text-Box/Text-Box'
import Button2 from '../../../UI/Button2/Button2'
import './Main.css'

const Main = () => {
  return (
    <main className="FontGeologica">

      {/* Hero Section */}
      <section className="bg-white text-white py-30 text-center px-6">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-[var(--Voscuro2)]">
          Tu ciudad más limpia empieza contigo
        </h1>
        <p className="text-base md:text-lg mb-6 text-[var(--Voscuro2)]">
          Solicitá la recolección de residuos en tu zona con un solo clic.
        </p>
        <Button2 />
      </section>

      {/* Servicios */}
      <section className="py-16 px-6 bg-[var(--Voscuro2)] text-white text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          <TextBox />
          <TextBox />
          <TextBox />
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-20 px-6 bg-white text-[var(--Voscuro2)] text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">¿Cómo funciona?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <div className="p-4">
            <h3 className="text-xl md:text-2xl font-bold mb-2">1. Registrate</h3>
            <p className="text-base md:text-xl">Crea tu cuenta y elegí tu zona.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl md:text-2xl font-bold mb-2">2. Pedí recolección</h3>
            <p className="text-base md:text-xl">Seleccioná el tipo de residuos y la fecha de retiro.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl md:text-2xl font-bold mb-2">3. Nosotros pasamos</h3>
            <p className="text-base md:text-xl">Un camión se encarga de retirarlos según lo programado.</p>
          </div>
        </div>
      </section>

      {/* Impacto positivo */}
      <section className="bg-[var(--Voscuro2)] py-20 px-6 text-center text-white">
        <h2 className="text-2xl md:text-4xl font-semibold mb-14">Impacto positivo</h2>
        <div className="grid md:grid-cols-4 gap-10 max-w-[1200px] mx-auto">
          <div>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-2">+10,000</h3>
            <p className="text-sm md:text-base">Usuarios registrados</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-2">+50 Tn</h3>
            <p className="text-sm md:text-base">Residuos reciclados</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-2">+120</h3>
            <p className="text-sm md:text-base">Camiones activos</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-2">24/7</h3>
            <p className="text-sm md:text-base">Servicio disponible</p>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Main
