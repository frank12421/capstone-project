import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  position: ${({ position }) => position};
  top: 0px;
  background-color: var(--globalAppBackgroundColor);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
