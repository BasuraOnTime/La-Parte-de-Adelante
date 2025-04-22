import Button2 from "../../UI/Button2/Button2";

export default function Home() {
    return (
      <main className="font-sans">
  
        {/* Hero Section */}
        <section className="bg-[#479F97] text-white py-30  text-center px-6 border-b-4 border-l-4 border-r-4 border-black">
          <h1 className="text-4xl font-bold mb-4">Tu ciudad más limpia empieza contigo</h1>
          <p className="text-lg mb-6">Solicitá la recolección de residuos en tu zona con un solo clic.</p>
          <Button2/>
        </section>
  
       
  
      </main>
    );
  }

