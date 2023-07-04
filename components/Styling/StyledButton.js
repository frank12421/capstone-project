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
  background-color: transparent;
  border: none;
  text-decoration: none;
  color: ${(props) => `var(--${props.color})`};
  cursor: pointer;

  &:hover,
  &:active {
    color: var(--globalNavigationPlaceColor);
  }
`;

const sharedStyles = `
height: 2.2em;
  box-shadow: var(--globalBorderShadow);
  border-style: none;
  border-radius: 10px;
  border: none;
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
