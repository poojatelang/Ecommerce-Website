import React,{useEffect} from 'react'
import { useProductContext } from '../context/ProductContext';
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import MyImage from "../components/MyImage"
import Star from "../components/Star"
import FormatPrice from "../Helpers/FormatPrice"
import AddToCart from "../components/AddToCart"

const API = "https://api.pujakaitem.com/api/products";
const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }
  return (
    <>
       <Wrapper>
        <div className='grid grid-two-column'>
          <div>
            <MyImage imgs={image}/>
          </div>
          <div className='details'>
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews}/>
            <p>MRP:<del> <FormatPrice price={price + 250000} /></del></p>
            <p> Deal of the Day: <FormatPrice price={price} /></p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Thapa Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>
            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
          
        </div>
       </Wrapper>
    </>
  )
}
const Wrapper=styled.section`
margin-top:5rem;
margin-right:5rem;
.details{
  display:flex;
  flex-direction:column;
  gap:1rem;
}
.product-data-warranty{
  display:flex;
  
  .product-warranty-data{
    background:#B2A59B;
    margin-left:1rem;
    padding:1rem;
    border-radius:2rem;

  }
}
.product-data-info{
  p{
    margin-bottom:1rem;
  
  span{
    font-weight:bold;
  }
}
}
hr {
  max-width: 100%;
  width: 90%;
  border: 0.1rem solid red;
}
`
export default SingleProduct