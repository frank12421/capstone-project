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
  }

 main {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
    }

h1 {
  font-size: 1.5rem;
}
`;
