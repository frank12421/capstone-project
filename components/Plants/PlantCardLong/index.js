import ButtonCard from "../../Card/ButtonCard";
import { mutate } from "swr";
import TomatoPicture from "/public/pictures/TomatoPicture.png";
import EggPlantPicture from "/public/pictures/EggPlantPicture.png";
import { StyledPlantImage } from "@/components/Styling/StyledImage";
import {
  StyledCardList,
  StyledCardListItem,
  StyledContentRowContainer,
} from "@/components/Card/Card.Styling";

export default function PlantCardLong({ plant }) {
  const deletePlant = async (plantId) => {
    const response = await fetch(`/api/plants/${plantId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      mutate(`/api/plants/`);
    } else {
      throw new Error("Failed to delete");
    }
  };

  const onClickMinusPlant = async (plantId) => {
    try {
      await deletePlant(plantId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ButtonCard
      key={plant._id}
      handleClick={() => onClickMinusPlant(plant._id)}
      backgroundcolor="globalPlantBackgroundColor"
      buttonicon="minus"
    >
      <h2>{plant.name}</h2>
      <StyledContentRowContainer>
        <StyledPlantImage
          src={plant.type === "Normal" ? TomatoPicture : EggPlantPicture}
          alt="Pflanze"
        />
        <StyledCardList>
          <StyledCardListItem>Type: {plant.type}</StyledCardListItem>
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
    </ButtonCard>
  );
}
