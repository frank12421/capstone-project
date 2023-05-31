import {
  StyledCard,
  StyledCardList,
  StyledCardListItem,
  StyledContentRowContainer,
} from "../Styling/Card";
import Image from "next/image";

export default function PlantCardLong({ plant }) {
  const imageSource =
    plant.type === "Normal" ? "/pictures/Plant1.png" : "/pictures/Plant2.png";

  return (
    <>
      <StyledCard
        key={plant._id}
        backgroundcolor={"globalPlantBackgroundColor"}
      >
        <h2>{plant.name}</h2>
        <StyledContentRowContainer>
          <Image
            src={imageSource}
            alt="Pflanze"
            width="50"
            height="100"
            style={{ objectFit: "contain" }}
          />
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
            <StyledCardListItem>Standort: {plant.location}</StyledCardListItem>
          </StyledCardList>
        </StyledContentRowContainer>
      </StyledCard>
    </>
  );
}
