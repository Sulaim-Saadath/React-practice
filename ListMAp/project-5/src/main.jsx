import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App2 from './App2'
import App3 from './App3'
// import App1 from './App1'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App3 />
  </StrictMode>,
)
