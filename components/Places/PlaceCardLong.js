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
import { useEffect, useRef, useState } from "react";
import {
  StyledIconEdit,
  StyledIconSettings,
  StyledIconTrash,
} from "../Styling/StyledIcon";
import { mutate } from "swr";
import { router } from "next/router";

export default function PlaceCardLong({ place }) {
  const [toggleSettings, setToggleSettings] = useState(false);
  const confirmationRef = useRef(null);

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

  const handleEditClick = (id) => {
    router.push(`/place/${id}`);
  };

  const deletePlace = async (placeId) => {
    const response = await fetch(`/api/places/${placeId}`, {
      method: "DELETE",
    });
    if (response.ok) {
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

  useEffect(() => {
    if (toggleSettings && confirmationRef.current) {
      confirmationRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [toggleSettings]);

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
        <CardContainer
          backgroundcolor="globalDateBackgroundColor"
          ref={confirmationRef}
        >
          <h3>Standort löschen?</h3>
          <StyledCircleButton
            type="button"
            onClick={() => handleDeleteClick(true, place._id)}
          >
            <StyledIconTrash color="globalNavigationPlantColor" />
          </StyledCircleButton>
          <h3>Standort bearbeiten:</h3>
          <StyledCircleButton
            type="button"
            onClick={() => handleEditClick(place._id)}
          >
            <StyledIconEdit color="globalNavigationIconColor" />
          </StyledCircleButton>

          <StyledLink
            href={{
              pathname: `/place/plant/${place._id}`,
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
