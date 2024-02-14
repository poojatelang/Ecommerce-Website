import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";

const CartItem = ({ id, name, image, color, price, count }) => {
  const { removeItem, setDecrease, setIncrease } = useCartContext();

  return (
    <Wrapper>
      <div className="grid grid-five-column">
      <div className="details-image">
        <div className="cart-image">
          
            <img src={image} alt={id} />
      
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color }}></div>
          </div>
        </div>
      </div>
      
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      <div className="count-toggle">
        <button onClick={() => setDecrease(id)}>
          <FaMinus />
        </button>
        <div className="count-style">{count}</div>
        <button onClick={() => setIncrease(id)}>
          <FaPlus />
        </button>
      </div>

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * count} />
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
    </Wrapper>
  );
};
const Wrapper=styled.section`
margin-top:2rem;
.details-image{
  display:flex;
  gap:1rem;
}
.cart-image{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin-bottom: 5.4rem;

  img {
    width: 6rem;
    height: 4rem;
  }

}
.count-toggle{
  display:flex;
  width:15px;
  height:50px;
  gap:1rem;
}
.count-style{
  font-size:2rem;
  font-weight:bold;
}
`

export default CartItem;
