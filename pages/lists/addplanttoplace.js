import { plants } from "@/db/db";
import { StyledButton, StyledLink } from "@/components/StyledButton";
import {
  StyledCard,
  StyledCardUl,
  StyledContentContainer,
  StyledLi,
} from "@/components/Card";

const plantsSorted = [...plants].sort((a, b) => (a.name > b.name ? 1 : -1));

export default function AddPlantToPlaceList() {
  return (
    <main>
      <h1>Pflanze auswählen - Grow Green</h1>
      <StyledLink color="darkgreen" href="/">
        zurück
      </StyledLink>
      <>
        {plantsSorted.map((plant) => {
          return (
            <section key={plant.id}>
              <StyledCard border={"green"}>
                <h2>{plant.name}</h2>
                <StyledContentContainer>
                  <StyledButton color="green">+</StyledButton>
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
