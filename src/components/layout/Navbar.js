import { Link } from "react-router-dom";

import Container from "./Container";
import logo from "../../img/costs_logo.png";

function Navbar() {
  return (
    <nav className="flex justify-between bg-gray-900 p-4">
      <Container customClass="justify-between">
        <Link to="/"><img src={logo} alt="Costs"/></Link>
        <ul className="flex items-center">
            <li className="mr-4 text-gray-200 hover:text-yellow-500">
                <Link to="/">Home</Link>
            </li>
            <li className="mr-4 text-gray-200 hover:text-yellow-500">
                <Link to="/projects">Projetos</Link>
            </li>
            <li className="mr-4 text-gray-200 hover:text-yellow-500">
                <Link to="/company">Empresa</Link>
            </li>
            <li className="mr-4 text-gray-200 hover:text-yellow-500">
                <Link to="/contact">Contato</Link>
            </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
