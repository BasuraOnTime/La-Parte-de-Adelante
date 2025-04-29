import Logo from '../../UI/logo/Logo';
import GoogleLoginButton from '../../UI/botonG/botonG';
import Divider from '../../UI/Divider/Divider';
import CreateAccountForm from '../../UI/CrearCuenta/CrearCuenta';
import Footer from '../../UI/Footer/Footer';
import Correo from '../../UI/CorreoImput/Correo';

const XLanding = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[rgb(10,196,150)] text-black">
      <div className="flex flex-1">
        <Logo />

        <div className="w-1/2 flex flex-col justify-center px-8">
          <h1 className="text-5xl font-bold mb-12 leading-tight">
            Lo que está <br /> pasando ahora
          </h1>

          <h2 className="text-2xl font-bold mb-6">Únete Hoy</h2>
          <Correo />
          <div className="grid  pl-20 pr-20 grid-cols-3 items-center m-2 max-w-lvh">
            <div className="h-[1px] bg-black w-full" />
            <div className="h-[9px] w-[9px]   border-2 border-b-black rounded-full mx-auto" />
            <div className="h-[1px] bg-black w-full" />
          </div>

          <Correo />
          <GoogleLoginButton />
          <Divider />
          <CreateAccountForm />
          
        </div>
      </div>
      
      <Footer />
    </div>
    
  );
};

export default XLanding;
