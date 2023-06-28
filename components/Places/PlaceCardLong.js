import {
  StyledCircleButton,
  StyledLink,
} from "@/components/Styling/StyledButton";
import {
  CardContainer,
  CardInfoLinkButton,
  StyledCardList,
  StyledCardListItem,
  StyledContentRowContainer,
} from "../Card/Card.Styling";
import GreenhousePicture from "/public/pictures/Greenhouse.png";
import OpenLandPicture from "/public/pictures/OpenLand.png";
import RoofPicture from "/public/pictures/Roof.png";
import PeoplePicture from "/public/pictures/People.png";
import { StyledPlaceImage } from "../Styling/StyledImage";
import { useState } from "react";
import { StyledIconSettings, StyledIconTrash } from "../Styling/StyledIcon";
import { mutate } from "swr";

export default function PlaceCardLong({ place }) {
  const [toggleSettings, setToggleSettings] = useState(false);

  let imageSource;
  switch (place.location) {
    case "Dach":
      imageSource = RoofPicture;
      break;
    case "Gewächshaus":
      imageSource = GreenhousePicture;
      break;
    case "Freiland":
      imageSource = OpenLandPicture;
      break;
    case "Sonstiges":
      imageSource = PeoplePicture;
      break;
    default:
      imageSource = OpenLandPicture;
  }
  const deletePlace = async (placeId) => {
    const response = await fetch(`/api/places/${placeId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log("Delete-Ok");
      mutate(`/api/places/`);
    } else {
      throw new Error("Failed to delete");
    }
  };

  const handleDeleteClick = async (event, placeId) => {
    if (event) {
      try {
        await deletePlace(placeId);
      } catch (error) {
        console.error(error);
      }
    } else {
      setToggleSettings(false);
    }
  };

  return (
    <>
      <CardContainer
        backgroundcolor={"globalPlaceBackgroundColor"}
        key={place._id}
      >
        <h2>{place.name}</h2>
        <StyledContentRowContainer>
          <StyledPlaceImage src={imageSource} alt="Standort" />
          <StyledCardList>
            <StyledCardListItem>
              Kapazität: {place.plants.length} / {place.capacity}
            </StyledCardListItem>
            <StyledCardListItem>Licht: {place.lightratio}</StyledCardListItem>
            <StyledCardListItem>Standort: {place.location}</StyledCardListItem>
            <StyledCardListItem>
              Regenschutz: {place.rainprotection}
            </StyledCardListItem>
          </StyledCardList>
        </StyledContentRowContainer>

        <CardInfoLinkButton>
          <StyledCircleButton
            onClick={() => setToggleSettings(!toggleSettings)}
          >
            <StyledIconSettings />
          </StyledCircleButton>
        </CardInfoLinkButton>
      </CardContainer>
      {toggleSettings && (
        <CardContainer backgroundcolor="globalDateBackgroundColor">
          <h3>Pflanze löschen?</h3>
          <StyledCircleButton
            type="button"
            onClick={() => handleDeleteClick(true, place._id)}
          >
            <StyledIconTrash color="globalNavigationPlantColor" />
          </StyledCircleButton>

          <StyledLink
            href={{
              pathname: `/place/${place._id}`,
            }}
            backgroundcolor={"globalPlantBackgroundColor"}
          >
            Pflanzen bearbeiten
          </StyledLink>
          <StyledLink
            href={{
              pathname: `/forms/showdateform`,
              query: { id: place._id },
            }}
            backgroundcolor={"globalDateBackgroundColor"}
          >
            Termin anlegen
          </StyledLink>
        </CardContainer>
      )}
    </>
  );
}
