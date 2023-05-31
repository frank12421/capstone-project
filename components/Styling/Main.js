import styled from "styled-components";

export const StyledMain = styled.main`
  margin-top: ${({ margintop }) => margintop}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;
