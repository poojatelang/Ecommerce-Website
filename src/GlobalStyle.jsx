import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  button{
    background:${({ theme }) => theme.btnbg};
    padding:10px;
    color: ${({ theme }) => theme.text};
    border:none;
    outline:none;
    border-radius:2rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  }
  button:hover{
    transform:scale(1);
    background:#40A2E3;
  }
  .grid {
    display: grid;
    gap: 9rem;
  }
  
  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .grid-four-column{
     grid-template-columns: 1fr 1.2fr .5fr .8fr ;
  }
  
  .grid-five-column{
    grid-template-columns: repeat(5, 1fr);
  }
  
  
  input, textarea{
      max-width: 50rem;
      color: ${({ theme }) => theme.text};
      padding: 1rem 2rem;
    
      text-transform: uppercase;
      
    
  }
      input[type="submit"]{
      max-width: 10rem;
      margin-top: 2rem;
      background-color:#40A2E3;
      color:${({ theme }) => theme.text};
      padding: 1rem 2rem;
      text-transform: uppercase;
      font-size: 1rem;
      cursor: pointer;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      &:hover{
        transform:scale(1);
      }
      }
  
  `
