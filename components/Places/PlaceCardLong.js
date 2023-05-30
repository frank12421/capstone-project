import { StyledLink } from "@/components/Styling/StyledButton";
import {
  StyledCard,
  StyledCardList,
  StyledContentContainer,
  StyledCardListItem,
  StyledCardFooter,
} from "@/components/Styling/Card";
import Image from "next/image";

export default function PlaceCardLong({ place }) {
  const imgSrc =
    place.location !== ""
      ? `/pictures/Place-${place.location}.png`
      : `/pictures/Place-People.png`;

  return (
    <StyledCard backgroundcolor={"globalPlaceBackgroundColor"} key={place._id}>
      <h2>{place.name}</h2>
      <StyledContentContainer>
        <Image
          src={imgSrc}
          alt="Standort"
          width="50"
          height="100"
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
      </StyledContentContainer>
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
