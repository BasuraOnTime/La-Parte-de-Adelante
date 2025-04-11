import { NavLink } from "react-router-dom"

export const ItemNavBar=({content, route})=> {
  return (
    <div>
      <li>
        <NavLink to={route}>{content}</NavLink>
      </li>
    </div>
  )
}