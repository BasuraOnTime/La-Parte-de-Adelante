import { NavLink } from "react-router-dom"
import "../BotonBack/BotonBack.css"
import { GiExitDoor } from "react-icons/gi";


export const ItemNavBar = ({ content, route }) => {
  return (
    <NavLink to={route}>
     <div class="button-container posi ">
  <button class="brutalist-button openai">
    <div class="openai-logo">
      <GiExitDoor className="text-4xl text-white" />
    </div>
    <div class="button-text">
     
    </div>
  </button>
</div>

    </NavLink>

  )
}
export default ItemNavBar;
