import {
  StyledCardList,
  StyledCardListItem,
  StyledContentRowContainer,
} from "../Styling/OldCard";
import Image from "next/image";
import { CardContainer } from "../Styling/Card";

export default function PlantCardLong({ plant }) {
  const imageSource =
    plant.type === "Normal" ? "/pictures/Plant1.svg" : "/pictures/Plant2.svg";

  return (
    <>
      <CardContainer
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
            priority={true}
          />
          <StyledCardList>
            <StyledCardListItem>Type: {plant.type}</StyledCardListItem>
            {/* <StyledCardListItem>
              Pflanzdatum: {plant.plantingdate}
            </StyledCardListItem> */}
            <StyledCardListItem>
              Pflanzhöhe: {plant.plantheight}
            </StyledCardListItem>
            <StyledCardListItem>
              Anbaueignung: {plant.cultivation_suitability}
            </StyledCardListItem>
            <StyledCardListItem>
              Fruchtform: {plant.fruit_shape}
            </StyledCardListItem>
            <StyledCardListItem>
              Fruchtfarbe: {plant.fruit_color}
            </StyledCardListItem>
          </StyledCardList>
        </StyledContentRowContainer>
      </CardContainer>
    </>
  );
}
