import Logo from '../../UI/logo/Logo';
import './Register.css';
import GoogleLoginButton from '../../UI/botonG/botonG';
import Divider from '../../UI/Divider/Divider';
import CreateAccountForm from '../../UI/CrearCuenta/CrearCuenta';
import Footer from '../../UI/Footer/Footer';
import Correo from '../../UI/CorreoImput/Correo';
import DividerB from '../../UI/dividerB/DividerB'

const XLanding = () => {
  return (
    <div className=" flex flex-col justify-between bg-[rgb(255,255,255)] text-black">
      <div className="flex flex-1">
        <Logo />

        <div id='Box-R' className="Register w-1/3  h-3/4 p-6 top-1/5 sticky flex flex-col justify-center px-8 "  >
          <h1 className="text-5xl text-center font-bold mb-12 leading-tight">
            Bienvenido a un lugar <br /> mas limpio 
          </h1>
          <DividerB/> 
          <div className='flex flex-col justify-center items-center'>
          <input className='rounded-xl bg-[var(--Vclaro2)] w-100 h-9 text-center placeholder:text-center  bg-white' type="text" placeholder='Correo' />
          <br/>
          <input className='rounded-xl bg-[var(--Vclaro2)] w-100 h-9 text-center placeholder:text-center  bg-white' type="password" placeholder='Contraseña' />
          </div>
          <DividerB/>
          <GoogleLoginButton />
          <Divider />
          <CreateAccountForm />
          
        </div>
      </div>
      
     
    </div>
    
  );
};

export default XLanding;
