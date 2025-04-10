import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Cookie from './components/Cookie/Cookie.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Cookie/>
  </StrictMode>,
)
