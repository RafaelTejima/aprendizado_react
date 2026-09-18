import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Empresas from './empresas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Empresas />
  </StrictMode>,
)
