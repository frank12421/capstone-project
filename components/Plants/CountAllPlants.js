import { useAllPlaces, useAllPlants } from "@/utils/helper";
import {
  StyledBigFigure,
  StyledBigText,
  StyledGridContainer,
} from "../Card/Card.Styling";
import LinkCard from "../Card/LinkCard";

export default function CountAllPlants() {
  const places = useAllPlaces();
  const plants = useAllPlants();

  let sumOfLengths;

  if (!places.isLoading) {
    sumOfLengths = places?.data.reduce(
      (sum, place) => sum + (place.plants?.length || 0),
      0
    );
  }

  if (!plants.data) {
    return null;
  }

  return (
    <LinkCard
      href={"lists/plantlist"}
      backgroundcolor="globalPlantBackgroundColor"
    >
      <StyledGridContainer>
        <StyledBigText>Alle Pflanzen:</StyledBigText>
        <StyledBigFigure>{sumOfLengths}</StyledBigFigure>

        <StyledBigText>Pflanzensorten:</StyledBigText>
        <StyledBigFigure>{plants.data.length}</StyledBigFigure>
      </StyledGridContainer>
    </LinkCard>
  );
}
