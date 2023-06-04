import { useAllPlaces } from "@/utils/helper";
import { StyledGridContainer } from "../Styling/OldCard";
import { StyledBigFigure, StyledBigText } from "../Card/Card.Styling";
import InfoCard from "../Card/InfoCard";

export default function CountAllPlaces() {
  const places = useAllPlaces();

  if (!places.data) {
    return null;
  }
  const countPlaces = places.data.length;

  return (
    <InfoCard
      href={"lists/placelist"}
      backgroundcolor="globalPlaceBackgroundColor"
    >
      <StyledGridContainer>
        <StyledBigText>Standorte gesamt: </StyledBigText>
        <StyledBigFigure>{countPlaces}</StyledBigFigure>
      </StyledGridContainer>
    </InfoCard>
  );
}
