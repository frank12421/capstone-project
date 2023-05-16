import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: lightgoldenrodyellow;
    /* outline: 1px solid black; */
    font-size: 0.8rem;
  }

h1 {
  font-size: 1.2rem;
  margin: 10px;
}

h2 {
font-size: 1rem;
margin: 5px
}

h3 {
font-size: 0.8rem;
margin: 2px;

}
`;
