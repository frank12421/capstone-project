import styled from "styled-components";
import Link from "next/link.js";

export const StyledNavigationContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 0 15px;
`;

export const StyledNavigationLink = styled(Link)`
  width: 100%;
  padding: 0px 0px 5px 5px;
  text-decoration: none;
  text-align: start;
  font-size: 1rem;
  font-weight: 800;
`;
