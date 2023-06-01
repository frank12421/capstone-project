import { useAllPlaces } from "@/utils/helper";
import {
  StyledBigFigure,
  StyledBigText,
  StyledGridContainer,
} from "../Styling/Card";

export default function CountAllPlaces() {
  const places = useAllPlaces();

  if (!places.data) {
    return null;
  }
  const countPlaces = places.data.length;

  return (
    <>
      <StyledGridContainer>
        <StyledBigText>Standorte gesamt: </StyledBigText>
        <StyledBigFigure>{countPlaces}</StyledBigFigure>
      </StyledGridContainer>
    </>
  );
}
