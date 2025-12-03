import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.tsx'

// Create a new element, at document.getElementId('root') -> The div inside index.htm;
// Replace/render with App component
// <App/> componetn is defined in ./App.tsx

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
