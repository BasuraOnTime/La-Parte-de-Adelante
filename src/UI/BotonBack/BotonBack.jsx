import { NavLink } from "react-router-dom"


export const ItemNavBar=({content, route})=> {
  return (
    <div>
      <button className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/60 to-transparent rotate-[25deg] animate-destellow-16 h-16 flex items-center justify-center border-4 border-black rounded-full bg-white hover:bg-gray-100 transition-all">
      
        <NavLink to={route}>{content}</NavLink>
      </button>
    </div>
  )
}