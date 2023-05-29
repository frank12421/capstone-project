import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  position: ${({ position }) => position};
  top: 0px;
  background-color: var(--globalNavigationBackgroundColor);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
