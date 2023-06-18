import styled from "styled-components";
import Link from "next/link.js";

export const StyledLink = styled(Link)`
  width: auto;
  margin: 5px;
  padding: 8px;
  border-radius: 10px;
  color: white;
  background-color: ${(props) => `var(--${props.backgroundcolor})`};
  text-decoration: none;
`;

export const StyledButton = styled.button`
  margin-bottom: 0.5rem;
  color: ${({ color }) => color || "lightgrey"};
  background-color: lightgray;
  border: 1px solid darkgreen;
  border-radius: 0.2rem;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    font-weight: 500;
  }
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
