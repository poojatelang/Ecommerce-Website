import React, { useContext,useState } from 'react'
import { useThemeContext } from '../context/ThemeContext';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from '../context/CartContext';

const Navbar = () => {
  const { themeToggler } = useThemeContext();
  const {total_item}=useCartContext();
  const [menuIcon, setMenuIcon] = useState();




  return (
    <>
      <Nav>
 
        <div className={menuIcon ? "navbar active" : "navbar"}>
          <ul className='navbar-lists'>
            <li>
              <NavLink to="/" className='nav-link'
               onClick={() => setMenuIcon(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className='nav-link'
               onClick={() => setMenuIcon(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className='nav-link'
               onClick={() => setMenuIcon(false)}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className='nav-link'
               onClick={() => setMenuIcon(false)}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className='cart-link'>
                <FiShoppingCart className='cart-trolley' />
                <span className='cart-item'>{total_item}</span>
              </NavLink>
            </li>
            <li>
              <button onClick={themeToggler}>Switch Theme</button>
            </li>

          </ul>
          <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
        </div>

      </Nav>
    </>
  )
}

const Nav = styled.nav`
.navbar-lists  {
  display:flex;
  gap:2rem;
  align-item:center;
 
  .nav-link{
    &:link,
    &:visited{
     
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: 500;
      text-transform: uppercase;
      color:black;
      transition: color 0.3s linear;
    }
    &:hover,
    &:active{
      color:#FF8911;
    }
   
  }
}
.mobile-navbar-btn {
  display: none;
  background-color: transparent;
  cursor: pointer;
  border: none;
}

.mobile-nav-icon[name="close-outline"] {
  display: none;
}

.close-outline {
  display: none;
}
.navbar-lists li {
  list-style:none;
}


.cart-link{
  position:relative;
  .cart-trolley{
    font-size:2rem;
    color:black;
    
    &:hover{
      color:${({ theme }) => theme.btnbg};
    }
    
  }
  .cart-item{
    position:absolute;
    top:-130%;
    left:70%;
    width:1.5rem;
    height:1.5rem;
    border-radius:50%;
    background-color:${({ theme }) => theme.btnbg};
     display:grid;
   place-items:center;
  

  }
}
@media(max-width:900px){
  .mobile-navbar-btn {
    display: inline-block;
    z-index: 9999;
    border: black;
    .mobile-nav-icon {
      font-size: 2.2rem;
      color:black;
    }
  }

  .active .mobile-nav-icon {
    display: none;
    font-size: 2.2rem;
    position: absolute;
    top: 10%;
    right: 10%;
    color: black;
    z-index: 9999;
  }

  .active .close-outline {
    display: inline-block;
  }

.navbar-lists {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #B2A59B;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  visibility: hidden;
  opacity: 0;
  transform: translateX(100%);
  transition: all 3s linear;
}

.active .navbar-lists {
  visibility: visible;
  opacity: 1;
  transform: translateX(0);
  z-index: 999;
  transform-origin: right;
  transition: all 3s linear;

  
}
}
`



export default Navbar