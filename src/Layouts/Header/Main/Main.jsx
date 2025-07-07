import React from 'react'
import TextBox from '../../../UI/Text-Box/Text-Box'
import Button2 from '../../../UI/Button2/Button2'
import './Main.css'
import logo from '../../../assets/img/icons/logo.png'

const Main = () => {
  return (
    <main className="FontGeologica">

        {/* Hero Section - Verde oscuro 1 */}
        <section className="bg-white text-white py-30 px-6 flex flex-col items-center justify-center text-center min-h-[50vh]">
          <img src={logo} alt="logo" className="w-auto h-[280px]" />
          <p className="FontCursive text-emerald-900 text-6xl">Basura On Time</p>
        </section>


        {/* Servicios - Verde oscuro 2 */}
        <section className="py-16 px-6 bg-[var(--Voscuro2)] text-white text-center">
          <h2 className="text-3xl font-semibold mb-8">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
            <TextBox />
            <TextBox />
            <TextBox />
          </div>
          <div className="p-4">
            <h3 className="text-xl md:text-2xl font-bold mb-2">2. Pedí recolección</h3>
            <p className="text-base md:text-xl">Seleccioná el tipo de residuos y la fecha de retiro.</p>
          </div>
        </section>

        {/* Impacto positivo - Verde oscuro 2 (Full width) */}
        <section className="bg-[var(--Voscuro2)] py-10 px-4 text-center text-white flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold mb-8">Impacto positivo</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] w-full">
            <div>
              <h3 className="text-3xl font-extrabold mb-1">+10,000</h3>
              <p className="text-sm">Usuarios registrados</p>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold mb-1">+120</h3>
              <p className="text-sm">Camiones activos</p>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold mb-1">24/7</h3>
              <p className="text-sm">Servicio disponible</p>
            </div>
          </div>
        </section>
       <footer className="bg-white text-black py-10 px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
    
    {/* Sección de enlaces */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Inicio</a></li>
        <li><a href="#" className="hover:underline">Servicios</a></li>
        <li><a href="#" className="hover:underline">Contacto</a></li>
        <li><a href="#" className="hover:underline">Acerca de</a></li>
      </ul>
    </div>

    {/* Sección de redes sociales */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
      <div className="flex justify-center gap-6 text-2xl">
        <a href="#" aria-label="Facebook" className="hover:text-emerald-500">🌐</a>
        <a href="#" aria-label="Twitter" className="hover:text-emerald-500">🐦</a>
        <a href="#" aria-label="Instagram" className="hover:text-emerald-500">📸</a>
      </div>
    </div>

    {/* Sección de contacto */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Contacto</h4>
      <p className="text-sm">info@basuraontime.com</p>
      <p className="text-sm">+123 456 7890</p>
      <p className="text-sm">Ciudad Verde, Eco País</p>
    </div>
  </div>

  {/* Línea inferior */}
  <div className="mt-10 text-xs text-gray-500 text-center">
    © {new Date().getFullYear()} Basura On Time. Todos los derechos reservados.
  </div>
</footer>





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