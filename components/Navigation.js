import styled from "styled-components";
import Link from "next/link.js";

const StyledNavigationLink = styled(Link)`
  width: 100%;
  padding: 10px;
  color: white;
  background-color: ${({ color }) => color || "lightgrey"};
  text-decoration: none;
  text-align: center;
`;

export default function StyledNavigation({ children, navigationlink, color }) {
  return (
    <StyledNavigationLink color={color} href={navigationlink}>
      {children}
    </StyledNavigationLink>
  );
}
