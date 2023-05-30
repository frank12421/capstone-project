import { StyledHeader } from "../Styling/Header";
import StyledNavigation from "../Styling/Navigation";
import {
  StyledCard,
  StyledCardFooter,
  StyledCardList,
  StyledCardListItem,
} from "../Styling/Card";
import {
  StyledModifyCountButtonActive,
  StyledRoundButtonActiv,
  StyledTextButton,
} from "../Styling/StyledButton";

export default function HeaderPlantsAtThisPlaceList({
  placeData,
  setAddPlant,
  addPlant,
}) {
  const freePlaces = placeData.capacity - placeData.plants.length;

  function toggleOnClick() {
    console.log(addPlant);
    setAddPlant(!addPlant);
  }

  return (
    <StyledHeader position="fixed">
      <StyledNavigation navigationlink="/lists/placelist" color="darkgreen">
        zurück
      </StyledNavigation>
      <StyledCard backgroundcolor={"globalPlaceBackgroundColor"}>
        <h3>{placeData.name}</h3>
        <StyledCardList>
          <StyledCardListItem>
            Kapazität:{placeData.capacity} | Noch frei: {freePlaces}
          </StyledCardListItem>
        </StyledCardList>
        <StyledCardFooter>
          <StyledTextButton type="button" onClick={toggleOnClick}>
            {addPlant ? "Liste anzeigen" : "Neue Pflanze"}
          </StyledTextButton>
        </StyledCardFooter>
      </StyledCard>
    </StyledHeader>
  );
}
