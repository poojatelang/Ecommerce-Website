import React, { useContext } from 'react'
import { useThemeContext } from '../context/ThemeContext';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from '../context/CartContext';

const Navbar = () => {
  const { themeToggler } = useThemeContext();
  const {total_item}=useCartContext();

  return (
    <>
      <Nav>
        <div>
          <ul className='navbar-lists'>
            <li>
              <NavLink to="/" className='nav-link'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className='nav-link'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className='nav-link'>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className='nav-link'>
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
}
.navbar-lists li {
  list-style:none;
}

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
`



export default Navbar