import "./Header.scss";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <div className="header">
      <div className="header__sup">
        <p>ayuda y contacto</p>
        <p>Envios y devoluciones gratuitos*</p>
        <p>Derecho de devolucion de 100 dias</p>
      </div>
      <div className="header__title">
        <h1>STORE</h1>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
