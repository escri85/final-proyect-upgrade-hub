import { Footer, Header, AddProduct} from './components';
import Home from './pages/Home/Home';
import {
  Routes,
  Route,
} from "react-router-dom";

import React, { useState } from 'react';

//Pages
import Accessories from './pages/Clothes/Accessories/Acessories';
import ManClothesPage from './pages/Clothes/ManClothesPage/ManClothesPage';
import ManShoesPage from './pages/Clothes/ManShoesPage/ManShoesPage';
import WomanClothesPage from './pages/Clothes/WomenClothesPage/WomanClothesPage';
import WomenShoesPage from './pages/Clothes/WomenShoesPage/WomenShoesPage';
import {CartPage} from './pages/CartPage/CartPage'

//SCSS
import './App.scss';


//Context
const cartContext = React.createContext()


function App() {
  
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <cartContext.Provider value={cart}>
        <Header/>
          <Routes>
            <Route path='/'>
              <Route path="/" element={<Home/>}/>
              <Route path='/accessories' element={<Accessories/>}/>
              <Route path='/man' element={<ManClothesPage setCart = {setCart}/>}/>
              <Route path='/manshoes' element={<ManShoesPage/>} setCart = {setCart}/>
              <Route path='/women' element={<WomanClothesPage/>} setCart = {setCart}/>
              <Route path='/womenshoes' element={<WomenShoesPage/>} setCart = {setCart}/>
              <Route path='/cart' element={<CartPage />} setCart = {setCart}/>
              <Route path='/add' element={<AddProduct/>}/>
            </Route>
          </Routes>
        <Footer/>
      </cartContext.Provider>  
    </div>
  );
}

export default App;
