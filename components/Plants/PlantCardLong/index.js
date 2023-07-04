import { mutate } from "swr";
import TomatoPicture from "/public/pictures/TomatoPicture.png";
import EggPlantPicture from "/public/pictures/EggPlantPicture.png";
import { StyledPlantImage } from "@/components/Styling/StyledImage";
import {
  CardContainer,
  CardInfoLinkButton,
  StyledCardList,
  StyledCardListItem,
  StyledContentRowContainer,
} from "@/components/Card/Card.Styling";
import { useEffect, useState, useRef } from "react";
import { StyledIconSettings } from "@/components/Styling/StyledIcon";
import { StyledCircleButton } from "@/components/Styling/StyledButton";
import { router } from "next/router";
import { StyledSubCardContainer } from "@/components/Styling/StyledSubCard";
import { SubCardDelete } from "@/components/SubCards/SubCardDelete";
import { SubCardEdit } from "@/components/SubCards/SubCardEdit";

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

  const handleDeleteClick = async (event, plantId) => {
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

  const handleEditClick = (id) => {
    router.push(`/plant/${id}`);
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
      <CardContainer
        key={plant._id}
        backgroundcolor="globalPlantBackgroundColor"
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
        <CardInfoLinkButton>
          <StyledCircleButton
            onClick={() => setshowConfirmation(!showConfirmation)}
          >
            <StyledIconSettings />
          </StyledCircleButton>
        </CardInfoLinkButton>
        {showConfirmation && (
          <StyledSubCardContainer ref={confirmationRef}>
            <SubCardDelete
              onClick={() => handleDeleteClick(true, plant._id)}
              color="globalNavigationPlantColor"
              backgroundcolor="globalDateBackgroundColor"
            >
              Pflanze löschen
            </SubCardDelete>

            <SubCardEdit
              onClick={() => handleEditClick(plant._id)}
              color="globalPlantBackgroundColor"
              backgroundcolor="globalNavigationPlantColor"
            >
              Pflanze bearbeiten
            </SubCardEdit>
          </StyledSubCardContainer>
        )}
      </CardContainer>
    </>
  );
}
