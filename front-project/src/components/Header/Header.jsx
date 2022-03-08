import { Link } from "react-router-dom";
import "./Header.scss";
import Navbar from "./Navbar/Navbar";


const Header = () => {
  return (
    <div className="header">
      
      <div >
        <Link to='/'>
          <h1>UP-Store</h1>
        </Link>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
