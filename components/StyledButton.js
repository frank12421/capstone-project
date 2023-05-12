import styled from "styled-components";
import Link from "next/link.js";

export const StyledLink = styled(Link)`
  margin: 20px;
  padding: 10px 50px;
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
  /* margin: 5px;
  border-radius: 10px; */
  color: ${({ color }) => color || "lightgrey"};
  background-color: white;
  border-style: none;
  text-decoration: none;
  font-size: 6rem;
  cursor: pointer;
  &:hover {
    font-weight: 900;
  }
`;
