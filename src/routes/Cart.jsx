import React from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/CartContext"
import CartItem from '../components/CartItem';
import FormatPrice from '../Helpers/FormatPrice';

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  if (cart.length === 0) {
    return (
      <EmptyDiv>
        <h3>No Cart in Item </h3>
      </EmptyDiv>
    );
  }

  return (
    <Wrapper>
      <div>
        <div className='grid grid-five-column'>
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>

        </div>
        <hr />
        <div className="cart-item">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <hr />
      </div>
      <div className="cart-two-button">
          <NavLink to="/products">
            <button> continue Shopping </button>
          </NavLink>
          <button className="btn-clear" onClick={clearCart}>
            clear cart
          </button>
        </div>
      <div className="order-total-subdata">
        <div>
          <p>subtotal:</p>
          <p>
            <FormatPrice price={total_price} />
          </p>
        </div>
        <div>
          <p>shipping fee:</p>
          <p>
            <FormatPrice price={shipping_fee} />
          </p>
        </div>
        <hr />
        <div>
          <p>order total:</p>
          <p>
            <FormatPrice price={shipping_fee + total_price} />
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
const EmptyDiv = styled.section`

h3{
  text-align:center;
  font-size:2rem;
}`

const Wrapper = styled.section`
padding:3rem 9rem 1rem 9rem;
.grid{
  gap:2rem;
}
hr{
  margin-top:2rem;
  width:97%;
}
.cart-two-button{
  margin-top:2rem;
  display:flex;
  justify-content:space-between;
  button{
    padding:1rem 2rem 1rem 2rem;
    font-size:1rem;
  }

}
.order-total-subdata {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 1.8rem;
  padding: 3.2rem;
  div {
    display: flex;
    gap: 3.2rem;
    justify-content: space-between;
  }

 

  div p:last-child {
    font-weight: bold;
  }
}
`
export default Cart