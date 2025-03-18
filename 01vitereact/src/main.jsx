import { StrictMode, createElement } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const another = "Shiv"
const  reactElement = createElement(
  'a', 
  {href: 'https://google.com', target: '_blank'},
  <h1>Click me </h1>, 
  <i>Vedant</i>,
  another
)
createRoot(document.getElementById('root')).render(
  // reactElement
  <StrictMode>
    <App />
  </StrictMode>,
)
