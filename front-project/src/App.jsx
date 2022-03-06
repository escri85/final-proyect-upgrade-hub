import { Accessories, ManClothesPage, ManShoesPage, WomanClothesPage, WomenShoesPage, CartPage, Register, Profile } from './pages';
import { Footer, Header, AddProduct, PrivateRoute, Login} from './components';
import { connect } from 'react-redux';
import Home from './pages/Home/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import React, { useState } from 'react';
import './App.scss';


//Context
const cartContext = React.createContext()

function App({user, error}) {
  const [cart, setCart] = useState([]);

  return (
      <div className="App">
        <cartContext.Provider value={cart}>
          <Header/>
            <Routes>
              <Route path='/'>
                <Route path="/" element={<Home/>}/>
                <Route path='/accessories' element={<Accessories cart={cart} setCart={setCart}/>}/>
                <Route path='/man' element={<ManClothesPage cart={cart} setCart={setCart}/>}/>
                <Route path='/manshoes' element={<ManShoesPage/>} cart={cart} setCart={setCart}/>
                <Route path='/women' element={<WomanClothesPage/>} cart={cart} setCart={setCart}/>
                <Route path='/womenshoes' element={<WomenShoesPage/>} cart={cart} setCart={setCart}/>
                <Route path='/cart' element={<CartPage cart={cart} setCart = {setCart}/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/profile" element={<PrivateRoute user={user} error={error} component={<Profile user={user}/>}/>}> </Route>
                <Route path='/add' element={<AddProduct/>}/>
                <Route path='/login' element={<Login />} />
              </Route>
            </Routes>
          <Footer/>
        </cartContext.Provider>
      </div>
  );
}

const mapStateToProps = (state) =>({
  user: state.auth.user,
  error: state.auth.error
})

export default connect(mapStateToProps)(App);
