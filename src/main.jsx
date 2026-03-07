import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n'; // <-- MANA SHU QATORNI QO'SHING

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)