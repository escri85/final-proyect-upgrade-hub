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
      
     
        <Link to='/'>
          <h1>UP-Store</h1>
        </Link>
        <div className="__swicth">
       <label htmlFor="darkMode">{checked1===true ? 'Dark' : 'Light'}</label>

        <InputSwitch checked={checked1} name='darkMode' onChange={handleChange}/>
        </div>
    
      <Navbar />
    </div>
  );
};

export default Header;
