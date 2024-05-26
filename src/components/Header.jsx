import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
      <MainHeader>
        <NavLink to="/">
          <img src="./images/logo.jpeg" alt="logo" />
        </NavLink>
        <Navbar/>
      </MainHeader>
    </>
  )
}

const MainHeader=styled.header`
background-color:#B2A59B;
padding: 1rem 5rem;
height:6rem;
position:fixed;
top:0;
z-index:1;
width:100%;
display:flex;
justify-content:space-between;
align-items: center;
img{
  height:4rem;
  width:8rem;
}

`

export default Header