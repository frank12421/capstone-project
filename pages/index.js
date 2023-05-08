import ShowPlantList from "../components/ShowPlantList.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <MainStyled>
      <h1>Hello from Grow Green</h1>
      <ShowPlantList type="places" />
    </MainStyled>
  );
}
const MainStyled = styled.main`
  background-color: lightgoldenrodyellow;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
