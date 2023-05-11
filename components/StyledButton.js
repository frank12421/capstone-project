import styled from "styled-components";
import Link from "next/link.js";

export const StyledLink = styled(Link)`
  margin: 20px;
  padding: 10px 50px;
  border-radius: 10px;
  color: white;
  background-color: ${({ color }) => color};
  text-decoration: none;
`;
