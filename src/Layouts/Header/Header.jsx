import {
  FaHome,
  FaUserPlus,
  FaUser,
  FaLock,
  FaSignInAlt,
  FaTools
} from "react-icons/fa";
import logo from '../../assets/img/icons/logo.png';
import { ItemNavBar } from '../../UI/ItemNavBar/ItemNavBar';
import './Header.css';

export function Header() {
  return (
    <header className="sticky top-0  bg-white h-28 px-8 shadow z-50 flex items-center justify-between">

      {/* Logo a la izquierda */}
      <div className="flex items-center gap-2">
        <div className="h-14 w-14 rounded-full bg-white border shadow flex justify-center items-center">
          <img src={logo} alt="logo" className="h-15 w-auto" />
        </div>
        <span className="text-xl font-bold text-green-800 hidden sm:inline">Basura on Time </span>
      </div>

      {/* Navegación a la derecha */}
      <nav className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
        <ItemNavBar route='/Register'label="Registro" />
        <ItemNavBar route='/InicioS' conten="Login" />
      </nav>
    </header>
  );
}

export default Header;
