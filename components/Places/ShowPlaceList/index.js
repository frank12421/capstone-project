import { StyledLink } from "@/components/Styling/StyledButton";
import {
  StyledCard,
  StyledCardList,
  StyledContentContainer,
  StyledCardListItem,
  StyledCardFooter,
} from "@/components/Styling/Card";
import { StyledHeader } from "@/components/Styling/Header";
import { StyledMain } from "@/components/Styling/Main";
import StyledNavigation from "@/components/Styling/Navigation";
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
            <StyledCard color={"globalPlaceBackgroundColor"} key={place._id}>
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
                  backgroundColor={"globalPlantBackgroundColor"}
                >
                  Pflanzen bearbeiten
                </StyledLink>
                <StyledLink
                  href={{
                    pathname: `/lists/showdateform`,
                    query: { id: place._id },
                  }}
                  backgroundColor={"globalDateBackgroundColor"}
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
