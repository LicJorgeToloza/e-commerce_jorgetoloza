import "./navbar.css"
import { CartWidget } from "../cartWidget/CartWidget";


export const Navbar = () => {
  return (
    <div className= "navConteiner">
      <ul className="categorias">
        <li className="catVehiculos">Sedan</li>
        <li>SUV</li>
        <li>Hatchback</li>
        <li>Pick Up</li>
        <li>Todos</li>
      </ul>
      <CartWidget/>
      <span> 4 </span>
    </div>
  )
}
