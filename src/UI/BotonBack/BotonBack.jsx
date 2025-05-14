import React from 'react';
import { NavLink } from 'react-router-dom';

export const ItemNavBar = ({ content = 'Go Back', route = '/', icon }) => {
  return (
    <div className="fixed top-4 left-4 z-50">
      <NavLink to={route}>
        <button
          id="botones"
          className="boton1 shadow-2xl shadow-[#000000a9] border-t-2 bg-white border-b-3 border-l-3 border-r-3 w-14 h-18"
          title={content}
          aria-label={content}
        >
          <div className="icon-c bg-white w-10 h-10 border-2 rounded-full justify-center items-center flex mx-auto">
            <img className="main" src={icon} alt={content} id="icon" />
          </div>
        </button>
      </NavLink>
    </div>
  );
};

export default ItemNavBar;
