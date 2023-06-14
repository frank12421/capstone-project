import { CardContenGrid, StyledCardFooter } from "../Styling/OldCard";
import { CardContainer } from "../Card/Card.Styling";
import { StyledTextButton } from "../Styling/StyledButton";
import { StyledIconAdd, StyledIconEqual } from "../Styling/StyledIcon";

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
    <>
      <CardContainer backgroundcolor={"globalPlaceBackgroundColor"}>
        <CardContenGrid>
          <span>Kapazität: {placeData.capacity}</span>
          <span>Noch frei: {freePlaces}</span>
          <span>Licht: {placeData.lightratio}</span>
          <span>Regenschutz: {placeData.rainprotection}</span>
        </CardContenGrid>

        <StyledCardFooter>
          <StyledTextButton type="button" onClick={toggleOnClick}>
            {addPlant ? (
              <StyledIconEqual
                align="right"
                color="globalNavigationIconColor"
              />
            ) : (
              <StyledIconAdd color="globalNavigationIconColor" />
            )}
          </StyledTextButton>
        </StyledCardFooter>
      </CardContainer>
    </>
  );
}
