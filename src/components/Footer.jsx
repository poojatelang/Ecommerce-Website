import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <Wrapper>
        <div className='footer-first-section'>
          <div className='container'>
            <div>
              <div>
                <p>Ready to get Started?</p>
                <p>Talk to Us Today</p>
              </div>
            </div>
            <div>
              <NavLink to="/contact">
                <button>Contact Us</button>
              </NavLink>
            </div>
          </div>
        </div>
        <footer>
          <div className='grid-four'>

            <div className="footer-about">
              <h3>Thapa Technical</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                <input type="submit" value="subscribe" />
              </form>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social-icons">
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                  <FaYoutube className="icons" />
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+91 12345678978</h3>
            </div>
          </div>
        </footer>
      </Wrapper>

    </>
  )
}

const Wrapper = styled.section`
.footer-first-section{
  padding :0 20rem ;
  transform:translateY(50%);
}

.container
{
  display:flex;
  justify-content:space-between;
  padding:2rem 5rem 2rem 5rem;
  border-radius:2rem;
  background-color:#B2A59B;

}
button{
  border-radius:2rem;
  padding:1rem 2rem 1rem 2rem;
  font-size:1rem;
}
footer {
  .grid-four{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    padding:12rem 9rem 7rem 9rem;
    background-color:#FE7A36;
    gap:2rem;
  }
  h3{
    margin-bottom:1rem;
  }
.footer-social-icons{
  display:flex;
  gap:1rem;
  font-size:2.5rem;
  div{
    width:4rem;
    height:4rem;
    border-radius:50%;
    border:2px solid ${({ theme }) => theme.text};
    display:grid;
    place-items:center;
  }
}
}
@media(max-width:1200px){
  .footer-first-section{
    padding :0 5rem ;
  }
  footer {
    .grid-four{
      grid-template-columns:1fr 1fr;
      // padding:12rem 9rem 7rem 9rem;
    }
  }
}
@media(max-width:768px){
  footer {
    .grid-four{
      grid-template-columns:1fr;
      // padding:12rem 9rem 7rem 9rem;
    }
  }
}
`
export default Footer