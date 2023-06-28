import { CardContainer, CardInfoLinkButton } from "../Card/Card.Styling";
import { StyledCircleButton } from "../Styling/StyledButton";
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
        <span>
          Kapazität: {placeData.capacity} | Noch frei: {freePlaces}
        </span>
        <span>
          Licht: {placeData.lightratio} | Regenschutz:{" "}
          {placeData.rainprotection}
        </span>
        <CardInfoLinkButton>
          <StyledCircleButton
            type="button"
            onClick={toggleOnClick}
            color="globalNavigationPlantColor"
          >
            {addPlant ? <StyledIconEqual /> : <StyledIconAdd />}
          </StyledCircleButton>
        </CardInfoLinkButton>
      </CardContainer>
    </>
  );
}
