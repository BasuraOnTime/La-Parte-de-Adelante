import { NavLink } from "react-router-dom"
import './ItemNavBar.css'

export const ItemNavBar=({content, route})=> {
  return (
    <div>
      <li className="">
        <NavLink className='' to={route}>{content}</NavLink>
      </li>
    </div>
  )
}