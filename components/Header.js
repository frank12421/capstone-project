import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  position: ${({ position }) => position || "relative"};
  top: 0px;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
