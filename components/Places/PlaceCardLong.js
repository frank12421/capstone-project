import { StyledLink } from "@/components/Styling/StyledButton";
import {
  StyledCardList,
  StyledContentRowContainer,
  StyledCardListItem,
  StyledCardFooter,
} from "@/components/Styling/OldCard";
import { CardContainer } from "../Card/Card.Styling";
import GreenhousePicture from "/public/pictures/Greenhouse.png";
import OpenLandPicture from "/public/pictures/OpenLand.png";
import RoofPicture from "/public/pictures/Roof.png";
import PeoplePicture from "/public/pictures/People.png";
import { StyledPlaceImage } from "../Styling/StyledImage";

export default function PlaceCardLong({ place }) {
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

  return (
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
      <StyledCardFooter>
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
            pathname: `/showdateform`,
            query: { id: place._id },
          }}
          backgroundcolor={"globalDateBackgroundColor"}
        >
          Termin anlegen
        </StyledLink>
      </StyledCardFooter>
    </CardContainer>
  );
}
