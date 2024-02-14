import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const HeroSection = ({ myData }) => {
  return (
    <>
      <Wrapper>
        <div className='container'>
          <div className='grid'>
            <div className='hero-section-data'>
              <p>Welcome To</p>
              <h1>{myData.name}</h1>
              <p className='intro-data'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facere sunt harum quae cumque deserunt omnis tempora repellat, iusto doloribus maiores
                laborum animi ipsa reprehenderit, esse quasi cum dolor rem.</p>
              <NavLink to="/products">
                <button>Shop Now</button>
              </NavLink>
            </div>
            <div className='img-cont'>
              <img src={myData.img} alt="store" />
            </div>
          </div>
        </div>

      </Wrapper>

    </>
  )
}

const Wrapper = styled.section`
.container{
  padding:5rem 12rem 5rem 12rem;
  
}
.grid{
  display:grid;
  gap:9rem;
  grid-template-columns:repeat(2,1fr)
}
img{
  width:100%;
  height:auto;
}
.hero-section-data{
  p {
    margin-top: 2rem ;
    font-size:1rem;
   color:#B2A59B;
  }

  h1 {
    text-transform: capitalize;
    font-weight: bold;
    margin-bottom:0;
    font-size:4rem;
  }

  .intro-data {
    margin-bottom: 1rem;
  }

 
}
`

export default HeroSection