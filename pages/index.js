import styled from "styled-components";
import Link from "next/link";

export default function HomePage() {
  return (
    <MainStyled>
      <h1>Hello from Grow Green</h1>
      {/* <ShowPlantList /> */}

      <Link href="/lists/plantlist">
        <h3>Alle Pflanzen zeigen</h3>
      </Link>
      <Link href="/lists/placelist">
        <h3>Alle Standorte zeigen</h3>
      </Link>
    </MainStyled>
  );
}
const MainStyled = styled.main`
  background-color: lightgoldenrodyellow;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
