import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PersonalInfoContextProvider } from './Contexts/PersonalInfoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersonalInfoContextProvider>
      <App />
    </PersonalInfoContextProvider>
  </StrictMode>,
)
