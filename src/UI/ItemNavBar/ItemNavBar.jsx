import { NavLink } from "react-router-dom";
import './ItemNavBar.css';
import './ItemNavBar.css'

export const ItemNavBar = ({ route, icon: Icon, label }) => {
  return (
    <NavLink to={route} className="w-full h-full">
     <button class="button">
      
    </button>
    </NavLink>
  );
};
