import { StyledLink } from "@/components/StyledButton";
import {
  StyledCard,
  StyledCardList,
  StyledContentContainer,
  StyledCardListItem,
  StyledCardFooter,
} from "@/components/Card";
import { StyledHeader } from "@/components/Header";
import { StyledMain } from "@/components/Main";
import StyledNavigation from "@/components/Navigation";
import Image from "next/image";

export default function PlaceList({ places }) {
  return (
    <>
      <StyledHeader>
        <h1>Alle Standorte - Grow Green</h1>
        <StyledNavigation navigationlink="/" color="darkgreen">
          zurück
        </StyledNavigation>
      </StyledHeader>
      <StyledMain>
        {places.map((place) => {
          const imgSrc =
            place.location !== ""
              ? `/pictures/Place-${place.location}.png`
              : `/pictures/Place-People.png`;

          return (
            <StyledCard border={"darkred"} key={place.id}>
              <h2>{place.name}</h2>
              <StyledContentContainer>
                <Image
                  src={imgSrc}
                  alt="Pflanze"
                  width="50"
                  height="100"
                  style={{ objectFit: "contain" }}
                />
                <StyledCardList>
                  <StyledCardListItem>
                    Kapazität: {place.used} / {place.capacity}
                  </StyledCardListItem>
                  <StyledCardListItem>
                    Licht: {place.lightratio}
                  </StyledCardListItem>
                  <StyledCardListItem>
                    Standort: {place.location}
                  </StyledCardListItem>
                  <StyledCardListItem>
                    Regenschutz: {place.rainprotection}
                  </StyledCardListItem>
                </StyledCardList>
              </StyledContentContainer>
              <StyledCardFooter>
                <StyledLink
                  href={{
                    pathname: `/lists/addplanttoplace`,
                    query: { id: place.id },
                  }}
                  color={"green"}
                >
                  Pflanzen bearbeiten
                </StyledLink>
                <StyledLink
                  href={{
                    pathname: `/lists/showdateform`,
                    query: { id: place.id },
                  }}
                  color={"darkred"}
                >
                  Termin anlegen
                </StyledLink>
              </StyledCardFooter>
            </StyledCard>
          );
        })}
      </StyledMain>
    </>
  );
}
