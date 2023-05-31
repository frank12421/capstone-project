import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

html {
--globalAppBackgroundColor: #1C3D59;
--globalPlantBackgroundColor: #59551B;
--globalPlaceBackgroundColor: #8C470B;
--globalDateBackgroundColor: #8C1616;
--globalLightColor: #FFDAB9;
--globalSecondLightColor: #D3D2D2;
--globalShadowColor: #39355a;
--globalNavigationBackgroundColor: ##BF871F;
--globalBorderShadow: var(--globalShadowColor) 0px 1px 0px,
    rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
}

body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: var(--globalAppBackgroundColor);
    color: var(--globalLightColor); 
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
