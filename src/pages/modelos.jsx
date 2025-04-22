export default function Home() {
    return (
      <main className="font-sans">
  
      
  
        {/* How It Works */}
        <section className="py-16 px-6 text-center bg-white">
          <h2 className="text-3xl font-semibold mb-10">¿Cómo funciona?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-4">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-2">1. Registrate</h3>
              <p>Crea tu cuenta y elegí tu zona.</p>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold mb-2">2. Pedí recolección</h3>
              <p>Seleccioná el tipo de residuos y la fecha de retiro.</p>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-4">🚛</div>
              <h3 className="text-xl font-bold mb-2">3. Nosotros pasamos</h3>
              <p>Un camión se encarga de retirarlos según lo programado.</p>
            </div>
          </div>
        </section>
  
        {/* Stats Section */}
        <section className="bg-green-100 py-16 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10">Impacto positivo</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-4xl font-bold text-green-700">+10,000</h3>
              <p>Usuarios registrados</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-green-700">+50 Tn</h3>
              <p>Residuos reciclados</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-green-700">+120</h3>
              <p>Camiones activos</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-green-700">24/7</h3>
              <p>Servicio disponible</p>
            </div>
          </div>
        </section>
  
      </main>
    );
  }

