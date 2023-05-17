import styled from "styled-components";
import Link from "next/link.js";

export const StyledLink = styled(Link)`
  width: auto;
  margin: 5px;
  padding: 8px;
  border-radius: 10px;
  color: white;
  background-color: ${({ color }) => color || "lightgrey"};
  text-decoration: none;
`;

export const StyledAddLink = styled(Link)`
  margin: 20px;
  padding: 10px 50px;
  border-radius: 10px;
  color: white;
  background-color: ${({ color }) => color || "lightgrey"};
  text-decoration: none;
`;

export const StyledButton = styled.button`
  color: ${({ color }) => color || "lightgrey"};
  background-color: white;
  border-style: none;
  text-decoration: none;
  font-size: 4rem;
  cursor: pointer;
  &:hover {
    font-weight: 900;
  }
`;

export const StyledInactiveButton = styled.button`
  color: lightgrey;
  background-color: white;
  border-style: none;
  text-decoration: none;
  font-size: 4rem;
`;
