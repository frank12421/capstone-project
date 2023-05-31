import { StyledHeader } from "../Styling/Header";
import StyledNavigationLink from "../Styling/Navigation";
import {
  StyledCard,
  StyledCardFooter,
  StyledCardList,
  StyledCardListItem,
} from "../Styling/Card";
import { StyledTextButton } from "../Styling/StyledButton";

export default function HeaderPlantsAtThisPlaceList({
  placeData,
  setAddPlant,
  addPlant,
}) {
  const freePlaces = placeData.capacity - placeData.plants.length;

  function toggleOnClick() {
    setAddPlant(!addPlant);
  }

  return (
    <StyledHeader position="fixed">
      <StyledNavigationLink navigationlink="/lists/placelist" color="darkgreen">
        zurück
      </StyledNavigationLink>
      <StyledCard backgroundcolor={"globalPlaceBackgroundColor"}>
        <h3>{placeData.name}</h3>
        <StyledCardList>
          <StyledCardListItem>
            Kapazität:{placeData.capacity} | Noch frei: {freePlaces}
          </StyledCardListItem>
          <StyledCardListItem>
            Licht: {placeData.lightratio} | Regenschutz:{" "}
            {placeData.rainprotection}
          </StyledCardListItem>
        </StyledCardList>
        <StyledCardFooter>
          <StyledTextButton type="button" onClick={toggleOnClick}>
            {addPlant ? "Pflanzen am Standort" : "Eine neue Pflanze hinzufügen"}
          </StyledTextButton>
        </StyledCardFooter>
      </StyledCard>
    </StyledHeader>
  );
}
