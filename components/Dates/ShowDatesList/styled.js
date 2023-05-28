import styled from "styled-components";

export const StyeldDatesList = styled.section`
  width: 100%;
  margin: 0;
  max-height: 155px;
  display: flex;
  flex-direction: column;
  background-color: lightgrey;
  margin-bottom: 20px;
  overflow-y: auto;
`;

export const StyledDatesListRow = styled.ul`
  margin: 0;
  display: grid;
  grid-template-columns: 25% 30% 1fr;
  grid-auto-rows: 1.4rem;
  align-items: center;
  justify-items: start;
  list-style: none;
  padding-left: 0.5rem;

  position: ${(props) => (props.$head ? "sticky" : "static")};
  top: ${(props) => (props.$head ? "0px" : "20px")};
  background-color: ${(props) => (props.$head ? "darkgray" : "")};
  color: ${(props) => (props.$head ? "white" : "black")};
  cursor: ${(props) => (props.$hover ? "pointer" : "")};
  &:hover {
    font-weight: ${(props) => (props.$hover ? 900 : 300)};
  }
`;

export const StyledDatesDetailCard = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1.4rem;
  align-items: center;
  justify-items: start;
  padding: 10px 10px 10px 20px;
`;

export const StyledDatesDetailCardButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: darkblue;
  color: lightgray;
  text-decoration: none;
  border-style: none;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    font-weight: 900;
  }
`;
