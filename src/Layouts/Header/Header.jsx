import logo from '../../assets/img/icons/logo.png';
import './Header.css';
import camion from '../../assets/img/icons/ezgif-367675f0653ab4.gif';
import {ItemNavBar} from '../../UI/ItemNavBar/ItemNavBar';
import main from '../../assets/img/icons/casa.png';
import Registrarme from '../../assets/img/icons/registrarme.png';
import { BiLogIn } from "react-icons/bi";

export function Header() { 
 
  return (
    <>
            <div className=" sticky top-0 bg-[var(--Vclaro3)] h-30 grid grid-cols-3 grid-rows-1 justify-center items-center " >
                <div id='logo' className="logo bg-[rgb(255,255,255)] h-20 w-24 m-4  justify-center flex ">
                    <img src={logo} alt="logo" className='  w-auto  ' />
                </div>
                <img src={camion}
                    alt="gif divertido" 
                    className='camion h-19 fixed top-6 left-9  '  />
                <div className="fixed top-22 left-1/2 transform -translate-x-1/3  grid grid-cols-4 gap-20">
                    <button
                      id='botones'
                     className='boton1  shadow-2xl shadow-[#000000a9] border-t-2 bg-white border-b-3 border-l-3 border-r-3 w-14 h-18 '>
                      <a href="https://www.youtube.com/watch?v=Pke3A2XuBLg&list=RD0WyyLN8K6os&index=16&ab_channel=MolotovVEVO">
                    <div className="icon-c bg-white w-10 h-10 border-2 rounded-full justify-center items-center flex">
                    <img className='main ' src={main} alt="" id="icon" /></div></a>
                      </button>    
                      <button
                      id='botones'
                     className='boton1  shadow-2xl shadow-[#000000a9] border-t-2 bg-white border-b-3 border-l-3 border-r-3 w-14 h-18 '>
                      <a href="https://www.youtube.com/watch?v=Pke3A2XuBLg&list=RD0WyyLN8K6os&index=16&ab_channel=MolotovVEVO">
                    <div className="icon-c bg-white w-10 h-10 border-2 rounded-full justify-center items-center flex">
                    <img className='main ' src={Registrarme} alt="" id="icon" /></div></a>
                      </button>    
                      <button
                      id='botones'
                     className='boton1  shadow-2xl shadow-[#000000a9] border-t-2 bg-white border-b-3 border-l-3 border-r-3 w-14 h-18 '>
                      <a href="https://www.youtube.com/watch?v=Pke3A2XuBLg&list=RD0WyyLN8K6os&index=16&ab_channel=MolotovVEVO">
                    <div className="icon-c bg-white w-10 h-10 border-2 rounded-full justify-center items-center flex">
                    <BiLogIn  className='h-7 w-7'/>
                    </div></a>
                      </button>    
                </div>
                  <div className="fixed top-8 right-0 grid grid-cols-2 pr-4 gap-4 list-none">
                    <ItemNavBar route='/' content='inicio' />
                    <ItemNavBar route='/Register' content='Registro' />
                  </div>
            </div>
      
    </>
  )
}

export default Header