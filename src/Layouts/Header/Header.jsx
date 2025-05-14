import logo from '../../assets/img/icons/logo.png';
import './Header.css';
import camion from '../../assets/img/icons/ezgif-367675f0653ab4.gif';
import { ItemNavBar } from '../../UI/ItemNavBar/ItemNavBar';
import main from '../../assets/img/icons/casa.png';
import Registrarme from '../../assets/img/icons/registrarme.png';
import { BiLogIn } from "react-icons/bi";

export function Header() {

  return (
    <>
<<<<<<< HEAD
      
          
            <div className=" sticky top-0 bg-[rgb(255,255,255)] h-30 grid grid-cols-3 grid-rows-1     justify-center items-center border-b-3  border-l-3 border-r-3 border-t-2 " >
                <div id='logo' className="logo  shadow-md shadow-black border-2 bg-[rgb(255,255,255)] h-20 w-24 m-4 rounded-full justify-center flex ">
                    <img src={logo} alt="logo" className='  w-auto  ' />
                </div>
=======
      <div className=" sticky top-0 bg-[var(--Vclaro3)] h-30 grid grid-cols-3 grid-rows-1 justify-center items-center " >
        <div id='logo' className="logo bg-[rgb(255,255,255)] h-20 w-24 m-4  justify-center flex ">
          <img src={logo} alt="logo" className='  w-auto  ' />
        </div>
        <img src={camion}
          alt="gif divertido"
          className='camion h-19 fixed top-6 left-9  ' />
        <div className="fixed top-22 left-1/2 transform -translate-x-1/3 grid grid-cols-4 gap-20">
          <ItemNavBar route='/'>
            <button
              id='botones'
              className='boton1 shadow-2xl shadow-[#000000a9] border-t-2 bg-white border-b-3 border-l-3 border-r-3 w-14 h-18 flex items-center justify-center'
            >
              <div className="icon-c bg-white w-10 h-10 border-2 rounded-full flex justify-center items-center">
                <img className='main' src={main} alt="Inicio" id="icon" />
              </div>
            </button>
          </ItemNavBar>
>>>>>>> 95ba988477a27b41a06fa618982b81a5522c1cc7

          <ItemNavBar route='/Register'>
            <button
              id='botones'
              className='boton1 shadow-2xl shadow-[#000000a9] border-t-2 bg-white border-b-3 border-l-3 border-r-3 w-14 h-18 flex items-center justify-center'
            >
              <div className="icon-c bg-white w-10 h-10 border-2 rounded-full flex justify-center items-center">
                <img className='main' src={Registrarme} alt="Registrarme" id="icon" />
              </div>
            </button>
          </ItemNavBar>

<<<<<<< HEAD
                  <div className="fixed top-8 right-0 grid grid-cols-2 pr-4 gap-4">
                    <ItemNavBar route='/' content='inicio' />
                    <ItemNavBar route='/Register' content='Registro' />
                    <ItemNavBar route='/Usuario' content='Usuario' />
                     <ItemNavBar route='/ContraR' content='ContraR' />
                  </div>
=======
          <ItemNavBar route='/login'>
            <button
              id='botones'
              className='boton1 shadow-2xl shadow-[#000000a9] border-t-2 bg-white border-b-3 border-l-3 border-r-3 w-14 h-18 flex items-center justify-center'
            >
              <div className="icon-c bg-white w-10 h-10 border-2 rounded-full flex justify-center items-center">
                <BiLogIn className='h-7 w-7' />
              </div>
            </button>
          </ItemNavBar>
        </div>

      </div>
>>>>>>> 95ba988477a27b41a06fa618982b81a5522c1cc7

    </>
  )
}

export default Header