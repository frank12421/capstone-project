import {
  StyledCard,
  StyledCardList,
  StyledCardListItem,
  StyledContentRowContainer,
} from "../Styling/Card";

export default function PlantCardShort({ plant, uniquePlantId, children }) {
  return (
    <StyledCard key={plant._id} backgroundcolor={"globalPlantBackgroundColor"}>
      <h2>{plant.name}</h2>
      <StyledCardList>
        <StyledCardListItem>Code: {uniquePlantId}</StyledCardListItem>
      </StyledCardList>
      {children}
    </StyledCard>
  );
}
