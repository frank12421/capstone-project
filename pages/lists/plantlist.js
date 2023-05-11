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
            plant.type === "Normal"
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
                    <StyledLi>Type: {plant.type}</StyledLi>
                    <StyledLi>Pflanzdatum: {plant.plantingdate}</StyledLi>
                    <StyledLi>Pflanzhöhe: {plant.plantheight}</StyledLi>
                    <StyledLi>
                      Anbaueignung: {plant.cultivation_suitability}
                    </StyledLi>
                    <StyledLi>Standort: {plant.location}</StyledLi>
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
