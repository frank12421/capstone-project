import {
  StyledCard,
  StyledCardList,
  StyledCardListItem,
  StyledContentContainer,
} from "../Styling/Card";

export default function PlantCardShort({ plant, uniquePlantId, children }) {
  return (
    <StyledCard key={plant._id} backgroundcolor={"globalPlantBackgroundColor"}>
      <h2>{plant.name}</h2>
      <StyledContentContainer>
        <StyledCardList>
          <StyledCardListItem>Id: {uniquePlantId}</StyledCardListItem>
        </StyledCardList>
      </StyledContentContainer>
      {children}
    </StyledCard>
  );
}
