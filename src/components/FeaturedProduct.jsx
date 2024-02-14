import React from 'react'
import { useProductContext } from '../context/ProductContext'
import Product from './Product';
import styled from "styled-components"


const FeaturedProduct = () => {
  const { isLoading, featureProducts } = useProductContext();
  if (isLoading) {
    return <div>.......Loading</div>
  }
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="common-heading">Our Feature Services</div>
          <div className='grid grid-three-column'>
            {
              featureProducts.map((item) => {
                return <Product key={item.id} item={item} />
              })
            }
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`

.common-heading{
  padding:2rem;
  text-align:center;
  font-size:2rem;
  font-weight:700;
}
.grid{
  background-color:#B2A59B;
  padding:5rem;
}
`

export default FeaturedProduct