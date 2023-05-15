import { plants } from "@/db/db";
import { StyledButton, StyledInactiveButton } from "@/components/StyledButton";
import {
  StyledCard,
  StyledCardList,
  StyledCardListItem,
  StyledContentContainer,
} from "@/components/Card";
import { useRouter } from "next/router";
import { StyledMain } from "@/components/Main";
import StyledNavigation from "@/components/Navigation";
import { StyledHeader } from "@/components/Header";

const plantsSorted = [...plants].sort((a, b) => (a.name > b.name ? 1 : -1));

export default function AddPlantToPlaceList({ places, setPlaces }) {
  const router = useRouter();
  const site = router.query;
  const place = places[site.id - 1];
  const freePlaces = place.capacity - place.used;
  const addButton = freePlaces <= 0 ? false : true;
  const minusButton = freePlaces >= place.capacity ? false : true;

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
    console.log(freePlaces);
  }

  function onClickMinusPlant() {
    setPlaces(
      places.map((place) => {
        if (place.id === site.id) {
          return { ...place, used: place.used - 1 };
        } else {
          return { ...place };
        }
      })
    );
  }

  return (
    <>
      <StyledHeader position="fixed">
        <h1>Pflanze auswählen - Grow Green</h1>
        <StyledNavigation navigationlink="/lists/placelist" color="darkgreen">
          zurück
        </StyledNavigation>
        <StyledCard border="red">
          <h3>{place.name}</h3>
          <StyledCardList>
            <StyledCardListItem>
              Kapazität:{place.capacity} | Noch frei: {freePlaces}
            </StyledCardListItem>
          </StyledCardList>
        </StyledCard>
      </StyledHeader>

      <StyledMain margintop="140">
        {plantsSorted.map((plant) => {
          return (
            <StyledCard border={"green"} key={plant.id}>
              <h2>{plant.name}</h2>
              <StyledContentContainer>
                {minusButton ? (
                  <StyledButton onClick={onClickMinusPlant} color="red">
                    -
                  </StyledButton>
                ) : (
                  <StyledInactiveButton>-</StyledInactiveButton>
                )}

                {addButton ? (
                  <StyledButton onClick={onClickAddPlant} color="green">
                    +
                  </StyledButton>
                ) : (
                  <StyledInactiveButton>+</StyledInactiveButton>
                )}
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
      </StyledMain>
    </>
  );
}
