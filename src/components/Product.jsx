import React from 'react'
import {NavLink} from "react-router-dom"
import styled from 'styled-components';
import FormatPrice from "../Helpers/FormatPrice"

const Product = ({item}) => {
  const{id,name,image,price,category}=item;

  return (
    <Wrapper>
      <NavLink to={`./singleproduct/${id}`}>
       <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data-price">{<FormatPrice price={price} />}</p>
          </div>
        </div>
      </div>
    </NavLink>
    </Wrapper>
  )
}
const Wrapper=styled.section`

figure{
  position:relative;
  img{
    width:300px;
    height:200px;
    border:1px solid ${({theme})=>theme.text};
    transition:all 2s linear;
    &:hover{
      transform:scale(1.1);
    }
  }
  .caption{
    position:absolute;
    top:15%;
    right:10%;
    color:${({theme})=>theme.text};
    background-color:${({theme})=>theme.btnbg};
    padding:0.5rem 1rem 0.5rem 1rem;
    border-radius:2rem;
  }

}
.card-data-flex {
  padding-top:1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

  h3 {
    color: ${({ theme }) => theme.text};
    text-transform: capitalize;
  }
  .card-data-price{
    color: ${({ theme }) => theme.text};
  }



`

export default Product