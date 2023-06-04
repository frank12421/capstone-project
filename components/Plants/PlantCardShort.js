import { CardContainer } from "../Card/Card.Styling";

export default function PlantCardShort({ plant, uniquePlantId, children }) {
  return (
    <CardContainer
      key={plant._id}
      backgroundcolor={"globalPlantBackgroundColor"}
    >
      <h2>{plant.name}</h2>
      Code: {uniquePlantId}
      {children}
    </CardContainer>
  );
}
