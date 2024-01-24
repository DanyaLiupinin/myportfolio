import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import './index.css';
import Favicon from "react-favicon";
import App from './components/App/App';
import icon from './images/favicon/favicon-32x32.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
      <Favicon url={icon} />
      <App />
  </HashRouter>
);

