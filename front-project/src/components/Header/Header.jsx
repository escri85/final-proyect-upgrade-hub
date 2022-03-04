import { Link } from "react-router-dom";
import "./Header.scss";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <div className="header">
      <div className="header__sup">
        <p>Ayuda y contacto</p>
        <p>Envios y devoluciones gratuitos*</p>
        <p>Derecho de devolucion de 100 dias</p>
      </div>
      <div className="header__title">
        <Link to='/'>
        <h1>STORE</h1>
        </Link>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
