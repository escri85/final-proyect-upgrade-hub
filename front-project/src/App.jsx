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

function App() {

  const [cart, setCart] = useState([]);

  return (
        <div className="App">
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
                <Route path='/add' element={<AddProduct/>}/>
              </Route>
            </Routes>
          <Footer/>
        </div>
  );
}

export default App;
