import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from './Contexts/ThemeContext';
import { ProfileProvider} from './Contexts/ProfileContext';
import LanguageWrapper from './Contexts/LanguageContext';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
          <ProfileProvider>
            <Provider store={store}>
              <App />
            </Provider>
          </ProfileProvider>
        <LanguageWrapper>
          <FilterProvider>
            <ProfileProvider>
              <Provider store={store}>
                <App />
              </Provider>
            </ProfileProvider>
          </FilterProvider>
        </LanguageWrapper>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);