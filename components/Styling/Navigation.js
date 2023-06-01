import styled from "styled-components";
import Link from "next/link.js";

export const StyledNavigationLink = styled(Link)`
  width: 100%;
  padding: 0px 0px 5px 5px;
  color: white;
  background-color: ${({ color }) => color || "lightgrey"};

  text-decoration: none;
  text-align: start;
  font-size: 1rem;
  font-weight: 800;
`;

export const StyledNavigationContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

export default function StyledNavigation({ children, navigationlink, color }) {
  return (
    <StyledNavigationLink color={color} href={navigationlink}>
      {children}
    </StyledNavigationLink>
  );
}
