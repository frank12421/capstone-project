import { plants } from "@/db/db";
import { StyledButton, StyledLink } from "@/components/StyledButton";
import {
  StyledCard,
  StyledCardList,
  StyledCardListItem,
  StyledContentContainer,
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
            <StyledCard border={"green"} key={plant.id}>
              <h2>{plant.name}</h2>
              <StyledContentContainer>
                <StyledButton onClick={onClickAddPlant} color="green">
                  +
                </StyledButton>
                <StyledCardList>
                  <StyledCardListItem>Type: {plant.type}</StyledCardListItem>
                  <StyledCardListItem>
                    Pflanzdatum: {plant.plantingdate}
                  </StyledCardListItem>
                  <StyledCardListItem>
                    Pflanzhöhe: {plant.plantheight}
                  </StyledCardListItem>
                  <StyledCardListItem>
                    Anbaueignung: {plant.cultivation_suitability}
                  </StyledCardListItem>
                  <StyledCardListItem>
                    Standort: {plant.location}
                  </StyledCardListItem>
                </StyledCardList>
              </StyledContentContainer>
            </StyledCard>
          );
        })}
      </>
    </main>
  );
}
