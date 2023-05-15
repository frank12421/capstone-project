import styled from "styled-components";

export const StyledCard = styled.section`
  width: 80vw;
  min-width: 355px;
  margin-top: 10px;
  background-color: white;
  border: 3px solid ${({ border }) => border};
  border-radius: 0.7rem;
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
  list-style: none;
`;
export const StyledCardListItem = styled.li`
  font-weight: 400;
`;
