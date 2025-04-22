import TextBox from "../../UI/Text-Box/Text-Box";


export default function Home2() {
    return (
        <section className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-8">Nuestros Servicios</h2>
      <div className="grid md:grid-cols-3 gap-6">
       
       <TextBox/>
       <TextBox/>
       <TextBox/>
       
      </div>
   
    </section>
      
    );
  }
    
