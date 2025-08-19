import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { FrontApp } from './components/FrontApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FrontApp></FrontApp>
    
  </StrictMode>,
)
