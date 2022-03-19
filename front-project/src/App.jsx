import { Accessories, ManClothesPage, ManShoesPage, WomanClothesPage, WomenShoesPage, CartPage, Access, Profile } from './pages';
import { Footer, Header, AddProduct, PrivateRoute, Chat, Search} from './components';
import { useContext } from 'react';
import {ThemeContext} from '../src/Contexts/ThemeContext';
import { connect } from 'react-redux';
import Home from './pages/Home/Home';
import GoogleLogin from 'react-google-login';

import {
  Routes,
  Route,
} from "react-router-dom";
import React, { useState } from 'react';
import './App.scss';

function App({user, error}) {
  const [{theme, isDark }, toggleTheme] = useContext(ThemeContext)
  const responseGoogle = (response) => {
    console.log(response);
  }

  //CART
  const buyProducts = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')):[]
  const [cart, setCart] = useState([]);

  return (
      <div className="App" style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
        <GoogleLogin
    clientId="966171888634-u11jhbnktfnhd6uto6ojn3se5s3eof14.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
          <Header toggleTheme={toggleTheme}/>
          <Search/>
            <Routes>
                <Route path='/'>
                  <Route path="/" element={<Home/>}/>
                  <Route path='/accessories' element={<Accessories cart={cart} setCart={setCart}/>}/>
                  <Route path='/man' element={<ManClothesPage cart={cart} setCart={setCart}/>}/>
                  <Route path='/manshoes' element={<ManShoesPage cart={cart} setCart={setCart}/>} />
                  <Route path='/women' element={<WomanClothesPage cart={cart} setCart={setCart} />} />
                  <Route path='/womenshoes' element={<WomenShoesPage cart={cart} setCart={setCart} />}/>
                  <Route path='/cart' element={<CartPage cart={cart} setCart = {setCart}/>} />
                  <Route path="/access" element={<Access/>} />
                  <Route path="/profile" element={<PrivateRoute component={<Profile/>}/>}> </Route>
                  <Route path='/add' element={<AddProduct/>}/>
                </Route>
            </Routes>
            <Chat/>
          <Footer/>
      </div>
  );
}

const mapStateToProps = (state) =>({
  user: state.auth.user,
  error: state.auth.error
})

export default connect(mapStateToProps)(App);
