import styled from "styled-components";

export const StyledDatesSection = styled.section`
  max-height: 150px;
  overflow-y: auto;
`;

export const StyledDatesList = styled.ul`
  margin: 0;
  display: grid;
  grid-template-columns: 30% 30% 1fr;
  grid-auto-rows: 1.4rem;
  align-items: center;
  justify-items: start;
  list-style: none;
  padding-left: 0.5rem;
  position: ${(props) => (props.$head ? "sticky" : "static")};
  top: ${(props) => (props.$head ? "0px" : "20px")};
  background-color: ${(props) =>
    props.$head ? `var(--globalDateBackgroundColor)` : ``};
  color: ${(props) =>
    props.$head ? `var(--globalLightColor)` : `var(--globalSecondLightColor)`};
  font-size: ${(props) => (props.$head ? "1.2rem" : "0.95rem")};
  cursor: ${(props) => (props.$hover ? "pointer" : "")};
  &:hover {
    font-weight: ${(props) => (props.$hover ? 900 : 300)};
  }
`;

export const StyledDatesDetailCard = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: auto;
  white-space: pre-wrap;
  padding: 10px 10px 10px 5px;
  font-size: 0.9rem;
`;

export const StyledDatesDetailCardButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--globalLightColor);
  color: var(--globalAppBackgroundColor);
  box-shadow: var(--globalShadowColor) 0px 1px 0px,
    rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
  border-radius: 0.5rem;

  text-decoration: none;
  border-style: none;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    font-weight: 900;
  }
`;
