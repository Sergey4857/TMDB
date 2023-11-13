import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/TMDB">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
