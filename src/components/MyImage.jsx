import React, { useState } from 'react'
import styled from "styled-components"

const MyImage = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);
  return (
    <Wrapper>
      <div className='grid grid-four-column'>
        {
          imgs.map((curElm, index) => {
            return (
              <figure>
                <img
                  src={curElm.url}
                  alt={curElm.filename}
                  className="box-image--style"
                  key={index}
                  onClick={() => setMainImage(curElm)}
                />
              </figure>
            )
          })
        }
      </div>
      <div className="main-screen">
        <img src={mainImage.url} alt={mainImage.filename} />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;
  padding:5rem;
.grid {
  justify-items: center;
  align-items: center;
  gap: 1rem;
  img{
    max-width: 100%;
    max-height: 100%;
    background-size: cover;
    object-fit: contain;
  }
}
.main-screen {
  display: grid;
  place-items: center;
  order: 1;
  img {
    max-width: 100%;
    height: auto;
   
  }
}
.grid-four-column {
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
}
`
export default MyImage