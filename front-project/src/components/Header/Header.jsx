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
          <img src="https://cdn.discordapp.com/attachments/954061730814787637/954061759789015090/Captura_de_pantalla_2022-03-17_a_las_17.59.21.png" alt="logo" />
          <Link className="header__text" to='/'>Connect Shop</Link>
      </div>
      <div className="__swicth">
          <label htmlFor="darkMode">{checked1===true ? 'Dark' : 'Light'}</label>
          <InputSwitch checked={checked1} name='darkMode' onChange={handleChange}/>
          </div>
      <Navbar />
    </div>
  );
};

export default Header;
