import { Link } from "react-router-dom";
import "./Header.scss";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <div className="header">
      <div className="header__sup">
        <p>Recibe tu pedido en 24/48h.</p>
        <p>Envíos gratuitos en pedidos superiores a 50€</p>
        <p>Devoluciones gratuitas</p>
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
