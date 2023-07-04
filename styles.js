import { createGlobalStyle } from "styled-components";
import { Jost, Indie_Flower } from "@next/font/google";

const jost = Jost({
  weight: "300",
  subsets: ["latin"],
});

const indie = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  *:focus {
  scroll-padding-block-end: 8vh;
}

html {
--globalAppBackgroundColor: #1C3D59;
--globalPlantBackgroundColor: #59551B;
--globalPlaceBackgroundColor: #8C470B;
--globalDateBackgroundColor: #8C1616;
--globalLightColor: #FFDAB9;
--globalSecondLightColor: #D3D2D2;
--globalShadowColor: #39355a;
--globalNavigationBackgroundColor: #BF871F;
--globalNavigationIconColor: #B2FFFF;
--globalNavigationPlantColor: #A1B41D;
--globalNavigationPlaceColor: #D2691E;
--globalNavigationDateColor: #FF4D4D;
--globalBorderShadow: var(--globalShadowColor) 0px 1px 0px,
    rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
--scriptfond: ${indie.style.fontFamily}
}

body {
    margin: 0;
    font-family: ${jost.style.fontFamily};
    background-color: var(--globalAppBackgroundColor);
    color: var(--globalLightColor); 
    font-size: 0.8rem;
  }
h1,h2 { margin: 0}



h3 {
font-size: 0.8rem;
margin: 2px;
}
`;