//libraries
import React from 'react'
import { createRoot } from 'react-dom/client'

//components
import App from './App'

//context
import ContextProvider from './components/context/Context'

const root = createRoot(document.getElementById('root'))
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
)
