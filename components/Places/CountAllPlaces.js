import { useAllPlaces } from "@/utils/helper";
import {
  StyledBigFigure,
  StyledBigText,
  StyledGridContainer,
} from "../Card/Card.Styling";
import LinkCard from "../Card/LinkCard";

export default function CountAllPlaces() {
  const places = useAllPlaces();

  if (!places.data) {
    return null;
  }
  const countPlaces = places.data.length;

  return (
    <LinkCard
      href={"lists/placelist"}
      backgroundcolor="globalPlaceBackgroundColor"
    >
      <StyledGridContainer>
        <StyledBigText>Standorte gesamt: </StyledBigText>
        <StyledBigFigure>{countPlaces}</StyledBigFigure>
      </StyledGridContainer>
    </LinkCard>
  );
}
