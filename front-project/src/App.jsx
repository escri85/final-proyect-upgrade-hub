import './App.scss';
import Header from './components/Header/Header';


//Router-dom
import {
  Routes,
  Route,
} from "react-router-dom";

//Componentes
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Gallery/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
