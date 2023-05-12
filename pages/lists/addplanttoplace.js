import { plants } from "@/db/db";
import { StyledButton, StyledLink } from "@/components/StyledButton";
import {
  StyledCard,
  StyledCardUl,
  StyledContentContainer,
  StyledLi,
} from "@/components/Card";
import { useRouter } from "next/router";

const plantsSorted = [...plants].sort((a, b) => (a.name > b.name ? 1 : -1));

export default function AddPlantToPlaceList({ places, setPlaces }) {
  const router = useRouter();
  const site = router.query;

  function onClickAddPlant() {
    setPlaces(
      places.map((place) => {
        if (place.id === site.id) {
          return { ...place, used: place.used + 1 };
        } else {
          return { ...place };
        }
      })
    );
    router.push("/lists/placelist");
  }

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
                  <StyledButton onClick={onClickAddPlant} color="green">
                    +
                  </StyledButton>
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
