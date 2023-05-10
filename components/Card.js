import styled from "styled-components";

export const StyledCard = styled.section`
  min-width: 355px;
  margin-top: 5%;
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

export const StyledCardUl = styled.ul`
  /* margin: 0; */
  list-style: none;
`;
export const StyledLi = styled.li`
  font-weight: 400;
`;

// const ListElementStyled = styled.p`
//   margin: 0;
// `;
