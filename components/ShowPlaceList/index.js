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
import { useFetch } from "@/utils/helper";

export default function ShowPlaceList() {
  const { data: places, error, isLoading } = useFetch("places");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <StyledHeader>
        <h1>Alle Standorte - New Grow Green</h1>
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
            <StyledCard border={"darkred"} key={place._id}>
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
                    pathname: `/place/${place._id}`,
                  }}
                  color={"green"}
                >
                  Pflanzen bearbeiten
                </StyledLink>
                <StyledLink
                  href={{
                    pathname: `/lists/showdateform`,
                    query: { id: place._id },
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
