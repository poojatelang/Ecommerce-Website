import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FormatPrice from "../Helpers/FormatPrice";
import { useProductContext } from "../context/ProductContext";

const Products = () => {
  const { products } = useProductContext();
  let [searchkey, updatekey] = useState('');
  return (
    <Wrapper className="section">
      <h2>Products</h2>
      <input type='text'  placeholder='Search Products...'
                        onChange={obj => updatekey(obj.target.value)} />
      <div className="container grid">
        {products.map((curElem) => {
          const { id, name, image, price, description } = curElem;
          searchkey = searchkey.toLowerCase()
          if (
              curElem.name.toLowerCase().match(searchkey) 
          )
          return (
            <>
              <div className="card grid grid-two-column">
                <figure>
                  <img src={image} alt={name} />
                </figure>

                <div className="card-data">
                  <h3>{name}</h3>
                  <p>
                    <FormatPrice price={price} />
                  </p>
                  <p>{description.slice(0, 90)}...</p>

                  <NavLink to={`/singleproduct/${id}`} >
                    <button className="btn">Read More</button>
                  </NavLink>
                </div>

              </div>
              <hr />
            </>

          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top:100px;
  padding: 1rem 9rem 1rem 9rem;
  h2{
      padding:2rem;
      text-align:center;
      font-size:3rem;
    }
  input{
     width:100%;
  }

  .grid {
    gap: 3rem;
  }
    img {
      max-width: 80%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
 .card-data{
  margin-top:3rem;
  display:flex;
  flex-direction:column;
  gap:1rem;
 }
hr{
  width:100%;
}

`;

export default Products;










