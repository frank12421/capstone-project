import ButtonCard from "../../Card/ButtonCard";
import { mutate } from "swr";
import TomatoPicture from "/public/pictures/TomatoPicture.png";
import EggPlantPicture from "/public/pictures/EggPlantPicture.png";
import { StyledPlantImage } from "@/components/Styling/StyledImage";
import {
  CardContainer,
  StyledCardFooter,
  StyledCardList,
  StyledCardListItem,
  StyledContentRowContainer,
} from "@/components/Card/Card.Styling";
import { useEffect, useState, useRef } from "react";
import { StyledIconCheck, StyledIconX } from "@/components/Styling/StyledIcon";
import { StyledCircleButton } from "@/components/Styling/StyledButton";

export default function PlantCardLong({ plant }) {
  const [showConfirmation, setshowConfirmation] = useState(false);
  const confirmationRef = useRef(null);

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

  const handleConfirmClick = async (event, plantId) => {
    if (event) {
      try {
        await deletePlant(plantId);
      } catch (error) {
        console.error(error);
      }
    } else {
      setshowConfirmation(false);
    }
  };

  useEffect(() => {
    if (showConfirmation && confirmationRef.current) {
      confirmationRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [showConfirmation]);

  return (
    <>
      <ButtonCard
        key={plant._id}
        handleClick={() => setshowConfirmation(!showConfirmation)}
        backgroundcolor="globalPlantBackgroundColor"
        buttonicon={!showConfirmation ? "minus" : "X"}
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
      {showConfirmation && (
        <CardContainer
          backgroundcolor="globalDateBackgroundColor"
          ref={confirmationRef}
        >
          <StyledCardFooter>
            <h2>Wirklich löschen?</h2>
            <StyledCircleButton
              type="button"
              onClick={() => handleConfirmClick(true, plant._id)}
            >
              <StyledIconCheck color="globalNavigationPlantColor" />
            </StyledCircleButton>
          </StyledCardFooter>
        </CardContainer>
      )}
    </>
  );
}
