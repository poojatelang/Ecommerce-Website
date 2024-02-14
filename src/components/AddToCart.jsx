import { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext"
import { FaMinus, FaPlus } from "react-icons/fa";


const AddToCart = ({ product }) => {

  const { addToCart } = useCartContext();

  const { id, colors, stock } = product;

  const [color, setColor] = useState(colors[0]);
  const [count, setCount] = useState(1);
  const setDecrease = () => {
    count > 1 ? setCount(count - 1) : setCount(1);
  };

  const setIncrease = () => {
    count < stock ? setCount(count + 1) : setCount(stock);
  };
  return (
    <Wrapper>
      <div className="colors">
        <p>
          Color:
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}>
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>
      <div className="count-toggle">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="count-style">{count}</div>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
      <NavLink to="/cart" onClick={() => addToCart(id, color, count, product)}>
        <button className="btn">Add To Cart</button>
      </NavLink>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.btnStyle {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-left: 1rem;
  border: none;
  outline: none;
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
}

.active {
  opacity: 1;
}
.checkStyle {
  font-size: 1rem;
  color: #fff;
}
.count-toggle{
  margin-top:1rem;
  margin-bottom:1rem;
  display:flex;
  gap:1rem;
}
.count-style{
  font-size:2rem;
  font-weight:bold;
}
.btn{
  padding:1rem 2rem 1rem 2rem;
}
`
export default AddToCart