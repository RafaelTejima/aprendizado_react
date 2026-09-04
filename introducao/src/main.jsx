import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Formularios from './Formularios.jsx'
import Perfil from './Perfil.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Perfil/>
  </StrictMode>,
)
