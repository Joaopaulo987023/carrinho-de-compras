import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyles } from './styles/GloblaStyles.js'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/Theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <App />
    </ThemeProvider>
    
  </React.StrictMode>,
)
