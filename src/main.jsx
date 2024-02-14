import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AppProvider } from './context/ProductContext.jsx'
import { CartProvider } from "./context/CartContext.jsx"
import { ThemeContextProvider } from './context/ThemeContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <AppProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AppProvider>
  </ThemeContextProvider>
)
