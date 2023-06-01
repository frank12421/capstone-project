import { StyledLink } from "@/components/Styling/StyledButton";
import {
  StyledCard,
  StyledCardList,
  StyledContentRowContainer,
  StyledCardListItem,
  StyledCardFooter,
} from "@/components/Styling/Card";
import Image from "next/image";

export default function PlaceCardLong({ place }) {
  const imageSource =
    place.location !== "Sonstiges"
      ? `/pictures/Place-${place.location}.png`
      : `/pictures/Place-People.png`;

  return (
    <StyledCard backgroundcolor={"globalPlaceBackgroundColor"} key={place._id}>
      <h2>{place.name}</h2>
      <StyledContentRowContainer>
        <Image
          src={imageSource}
          alt="Standort"
          width="90"
          height="90"
          style={{ objectFit: "contain" }}
        />
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
    </StyledCard>
  );
}
