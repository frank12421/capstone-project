import Image from "next/image.js";
import styled from "styled-components";
import { StyledLinkGreen, StyledLinkRed } from "@/components/StyledButton";

const StyledButtonContainer = styled.div`
  margin-top: 50px;
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
      <StyledButtonContainer>
        <StyledLinkGreen href="/lists/plantlist">
          Alle Pflanzen anzeigen
        </StyledLinkGreen>
      </StyledButtonContainer>

      <StyledButtonContainer>
        <StyledLinkRed href="/lists/placelist">
          Alle Standorte anzeigen
        </StyledLinkRed>
      </StyledButtonContainer>
    </main>
  );
}
