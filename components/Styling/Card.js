import styled from "styled-components";

export const StyledCard = styled.section`
  width: 95%;
  min-height: 50px;
  height: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => `var(--${props.backgroundcolor})`};
  color: var(--globalLightColor);
  box-shadow: var(--globalBorderShadow);
  border-radius: 1rem;
  padding: 0.8rem 1rem;
  display: flex;
  flex-direction: column;
`;

export const StyledContentRowContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const StyledCardList = styled.ul`
  margin-top: 0;
  list-style: none;
`;
export const StyledCardListItem = styled.li`
  font-size: 0.9rem;
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

export const StyledBigFigure = styled.p`
  margin: 0;
  font-size: 3rem;
  padding: 0;
  justify-self: end;
`;

export const StyledBigText = styled.p`
  margin: 0;
  font-size: 1.5rem;
`;

export const StyledGridContainer = styled.section`
  width: 80%;
  display: grid;
  grid-template-columns: 90% 10%;
  align-items: center;
`;
