import './App.scss';

//Router-dom
import {
  Routes,
  Route,
} from "react-router-dom";

//Componentes
import Gallery from './components/Gallery/Gallery';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Gallery/>}/>
      </Routes>
    </div>
  );
}

export default App;
