import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './styles/index.js'


const rootElement = document.getElementById('root');
if (rootElement !== null) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App/>
      <GlobalStyle/>
    </React.StrictMode>,
  );
}

