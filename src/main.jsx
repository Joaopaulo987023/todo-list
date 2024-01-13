import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './styles/index.js'
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme.js';
import TodoProvider from './context/TodoProvider.jsx';


const rootElement = document.getElementById('root');
if (rootElement !== null) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <TodoProvider>
        <ThemeProvider theme={theme}>
          <App/>
          <GlobalStyle/>
        </ThemeProvider>
      </TodoProvider>
    </React.StrictMode>,
  );
}

