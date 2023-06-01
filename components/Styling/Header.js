import styled from "styled-components";

export const StyledHeader = styled.header`
  margin: 0;
  margin-top: 5px;
  width: 100%;
  position: ${({ position }) => position};
  top: 0px;
  background-color: var(--globalAppBackgroundColor);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 200;
`;

export const StyledSubHeader = styled.div`
  font-family: var(--scriptfond);
  font-size: 0.85rem;
`;

export const StyledHomeHeader = styled.header`
  padding: 10px 0px 0px 10px;
  width: 100%;
  position: sticky;
  font-size: 1.2rem;
  top: 0px;
  background-color: var(--globalAppBackgroundColor);
  display: flex;
  justify-content: center;
  z-index: 100;
`;
