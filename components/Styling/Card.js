import styled from "styled-components";

export const StyledCard = styled.section`
  width: 95%;
  /* min-width: 355px; */
  min-height: 50px;
  height: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => `var(--${props.backgroundcolor})`};
  color: var(--globalLightColor);
  box-shadow: var(--globalBorderShadow);
  border-radius: 1rem;
  padding: 0.2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StyledContentContainer = styled.section`
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
  justify-content: flex-start;
`;

export const StyledCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ margintop }) => margintop};
`;
