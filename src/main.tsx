import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './app/App'
import './styles/variables.css'
import './styles/pages.css'
import './styles/responsive.css'
import './index.css'
import './styles/back-link.css'
import './styles/project-detail.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element was not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)