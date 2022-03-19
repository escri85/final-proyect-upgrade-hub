import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from './Contexts/ThemeContext';
import { FilterProvider} from './Contexts/FilterContext';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <FilterProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </FilterProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);