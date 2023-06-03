import styled from "styled-components";
import Link from "next/link.js";

const sharedCardStyles = `
width: 95%;
  min-height: 50px;
  height: auto;
  color: var(--globalLightColor);
  box-shadow: var(--globalBorderShadow);
  border-radius: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  padding: 0.8rem 1rem;

`;

export const CardContainerLink = styled(Link)`
  ${sharedCardStyles}
  background-color: ${(props) => `var(--${props.backgroundcolor})`};
`;

export const CardContainer = styled.section`
  ${sharedCardStyles}
  background-color: ${(props) => `var(--${props.backgroundcolor})`};
`;

export const StyledBigFigure = styled.p`
  margin: 0;
  font-size: 2.8rem;
  padding: 0;
  justify-self: end;
`;

export const StyledBigText = styled.p`
  margin: 0;
  font-size: 1.5rem;
`;

export const CardInfoLinkButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 5px;
  z-index: 500;
`;
