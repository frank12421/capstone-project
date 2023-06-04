import styled from "styled-components";
import Link from "next/link.js";

export const StyledNavigationContainer = styled.nav`
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

export const StyledNavigationLink = styled(Link)`
  width: 100%;
  padding: 0px 0px 5px 5px;
  text-decoration: none;
  text-align: start;
  font-size: 1rem;
  font-weight: 800;
`;
