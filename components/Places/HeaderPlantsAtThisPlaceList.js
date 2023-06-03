import { CardContenGrid, StyledCardFooter } from "../Styling/OldCard";
import { CardContainer } from "../Styling/Card";
import { StyledTextButton } from "../Styling/StyledButton";
import { StyledIconImage } from "../Styling/StyledImage";

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
              <StyledIconImage
                width="35"
                height="35"
                alt=""
                src={"/pictures/align-justify.svg"}
                priority={true}
                align="right"
              />
            ) : (
              <StyledIconImage
                width="35"
                height="35"
                alt=""
                src={"/pictures/add.svg"}
                priority={true}
                align="right"
              />
            )}
          </StyledTextButton>
        </StyledCardFooter>
      </CardContainer>
    </>
  );
}
