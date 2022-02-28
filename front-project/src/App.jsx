import { Gallery, Footer, Header } from './components';
import Home from './pages/Home/Home';
import {
  Routes,
  Route,
} from "react-router-dom";

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/'>
          <Route path="/" element={<Home/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
