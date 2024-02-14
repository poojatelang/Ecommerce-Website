import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {  GlobalStyles } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./routes/Home";
import About from "./routes/About";
import Cart from "./routes/Cart";
import Contact from "./routes/Contact";
import ErrorPage from "./routes/ErrorPage";
import Products from "./routes/Products";
import SingleProduct from "./routes/SingleProduct";
import { lightTheme, darkTheme } from "./components/Theme"
import { useThemeContext } from './context/ThemeContext';


function App() {
  const {themecolor}=useThemeContext();

  return (
    <>
    <ThemeProvider theme={themecolor ? lightTheme : darkTheme}>
      <Router>
        < GlobalStyles />
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </ThemeProvider>
    </>
  )
}

export default App
