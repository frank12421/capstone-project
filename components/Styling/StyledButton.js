import styled from "styled-components";
import Link from "next/link.js";

export const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;
`;

export const StyledTextButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const StyledCircleButton = styled.button`
  padding: 0px;
  background-color: transparent;
  border: none;
  text-decoration: none;
  color: ${(props) => `var(--${props.color})`};
  cursor: pointer;
`;

const sharedStyles = `
padding: 5px;
border-radius: 10px;
  border: none;
  font-family: __Jost_277113,__Jost_Fallback_277113;
  font-size: 0.8rem;
  line-height: 1.2rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

export const StyledSubCardButton = styled.button`
  background-color: ${(props) => `var(--${props.backgroundcolor})`};
  color: ${(props) => `var(--${props.color})`};
  ${sharedStyles};
`;

export const StyledSubCardLink = styled(Link)`
  background-color: ${(props) => `var(--${props.backgroundcolor})`};
  color: ${(props) => `var(--${props.color})`};
  ${sharedStyles};
`;
