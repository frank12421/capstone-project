import styled from "styled-components";
import Image from "next/image.js";
import { StyledALinkWhite } from "@/components/StyledButton";

const ButtonContainer = styled.div`
  background: greenyellow;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: medium;
  padding-bottom: 30px;
`;

const ButtonPlantStyled = styled.button`
  margin-top: 5vh;
  padding: 1vh 5vw;
  background: green;
  border-radius: 2vw;
  outline: none;
  border: none;
  cursor: pointer;
`;

const ButtonPlaceStyled = styled.button`
  margin-top: 5vh;
  padding: 1vh 5vw;
  background: red;
  border-radius: 2vw;
  outline: none;
  border: none;
  cursor: pointer;
`;

export default function HomePage() {
  return (
    <main>
      <h1>Hello from Grow Green</h1>
      <Image
        width="350"
        height="150"
        alt="Pflanze"
        src={"/pictures/Header-Home.png"}
      />
      <ButtonContainer>
        <ButtonPlantStyled>
          <StyledALinkWhite href="/lists/plantlist">
            Alle Pflanzen zeigen
          </StyledALinkWhite>
        </ButtonPlantStyled>

        <ButtonPlaceStyled>
          <StyledALinkWhite href="/lists/placelist">
            Alle Standorte zeigen
          </StyledALinkWhite>
        </ButtonPlaceStyled>
      </ButtonContainer>
    </main>
  );
}
