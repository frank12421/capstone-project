import styled from "styled-components";

export const StyledContentRowContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const StyledCardList = styled.ul`
  width: 100%;
  margin: 0;
  list-style: none;
`;
export const StyledCardListItem = styled.li`
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
`;

export const StyledCardFooter = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledCardColumnContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ margintop }) => margintop};
`;

export const StyledGridContainer = styled.section`
  width: 80%;
  display: grid;
  grid-template-columns: 90% 10%;
  align-items: center;
`;

export const InfoLinkContainerContent = styled.section`
  width: 100%;
  margin: 0;
`;

export const InfoLinkContainerButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 5px;
  z-index: 1;
`;

export const CardContenGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 1rem;
  margin: 0;
`;
