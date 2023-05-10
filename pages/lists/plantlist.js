import { plants } from "@/db/db";
import { StyledLink } from "@/components/StyledButton";
import {
  StyledCard,
  StyledCardUl,
  StyledContentContainer,
  StyledLi,
} from "@/components/Card";
import Image from "next/image";

export default function PlantList() {
  return (
    <main>
      <h1>Alle Pflanzen - Grow Green</h1>
      <StyledLink color="darkgreen" href="/">
        zurück
      </StyledLink>
      <>
        {plants.map((plant) => {
          const imgSrc =
            plant.typ === "Normal"
              ? "/pictures/Plant1.png"
              : "/pictures/Plant2.png";

          return (
            <section key={plant.id}>
              <StyledCard border={"green"}>
                <h2>{plant.name}</h2>
                <StyledContentContainer>
                  <Image
                    src={imgSrc}
                    alt="Pflanze"
                    width="50"
                    height="150"
                    style={{ objectFit: "contain" }}
                  />
                  <StyledCardUl>
                    <StyledLi>Type: {plant.typ}</StyledLi>
                    <StyledLi>Pflanzdatum: {plant.pflanzdatum}</StyledLi>
                    <StyledLi>Pflanzhöhe: {plant.pflanzenhoehe}</StyledLi>
                    <StyledLi>Anbaueignung: {plant.anbaueignung}</StyledLi>
                    <StyledLi>Standort: {plant.standort}</StyledLi>
                  </StyledCardUl>
                </StyledContentContainer>
              </StyledCard>
            </section>
          );
        })}
      </>
    </main>
  );
}
