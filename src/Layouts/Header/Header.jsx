import { FaUserPlus, FaSignInAlt, FaRegClock } from "react-icons/fa";
import logo from '../../assets/img/icons/logo.png';
import camion from '../../assets/img/icons/ezgif-367675f0653ab4.gif';
import { ItemNavBar } from '../../UI/ItemNavBar/ItemNavBar';
import './Header.css';

export function Header() {
  return (
    <>
      <div className="sticky top-0 bg-[var(--Voscuro2)] h-40 grid grid-cols-2 items-center z-50 FontGeologica text-white shadow-lg">

        {/* Logo con texto y frase inspiradora */}
        <div className="flex items-center gap-4 m-8">
          {/* Logo */}
          <div className="border-2 bg-white h-25 w-25 rounded-full shadow-md flex justify-center items-center">
            <img src={logo} alt="logo" className="w-auto h-14" />
          </div>

          {/* Título y frase */}
          <div className="text-white">
            <p className="FontCursive text-3xl">Basura On Time</p>
            <p className="text-sm text-gray-200 italic">Por un futuro más limpio, empezamos hoy.</p>
          </div>
        </div>

        {/* Botones de navegación */}
        <div className="flex justify-end gap-4 pr-4 me-15">
          <ItemNavBar route='/Register' icon={FaUserPlus} label="Registro" />
          <ItemNavBar route='/InicioS' icon={FaSignInAlt} label="Login" />
          <ItemNavBar route='/RutasU' icon={FaRegClock} label="Horario de recolección" />
        </div>
      </div>
    </>
  );
}

export default Header;
