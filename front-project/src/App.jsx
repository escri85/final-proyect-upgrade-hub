import { Footer, Header, Cart, AddProduct} from './components';
import Home from './pages/Home/Home';
import {
  Routes,
  Route,
} from "react-router-dom";

//Pages

import Accessories from './pages/Clothes/Accessories/Acessories';
import ManClothesPage from './pages/Clothes/ManClothesPage/ManClothesPage';
import ManShoesPage from './pages/Clothes/ManShoesPage/ManShoesPage';
import WomanClothesPage from './pages/Clothes/WomenClothesPage/WomanClothesPage';
import WomenShoesPage from './pages/Clothes/WomenShoesPage/WomenShoesPage';

//SCSS
import './App.scss';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/'>
          <Route path="/" element={<Home/>}/>
          <Route path='/accessories' element={<Accessories/>}/>
          <Route path='/man' element={<ManClothesPage/>}/>
          <Route path='/manshoes' element={<ManShoesPage/>}/>
          <Route path='/women' element={<WomanClothesPage/>}/>
          <Route path='/womenshoes' element={<WomenShoesPage/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/add' element={<AddProduct/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
