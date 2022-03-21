import { Link } from "react-router-dom";
import "./Header.scss";
import Navbar from "./Navbar/Navbar";
import { InputSwitch } from 'primereact/inputswitch';
import React, { useState } from 'react';


const Header = ({toggleTheme}) => {
  const [checked1, setChecked1] = useState(true);

  const handleChange=(event)=>{
    setChecked1(event.value)
    toggleTheme()
}
  return (
    <div className="header">
      <div className="header__title">
          <Link className="header__text" to='/'>ZARANDO</Link>
      </div>
      <div className="__swicth">
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
