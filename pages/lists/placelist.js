import { StyledLink, StyledNavigationLink } from "@/components/StyledButton";
import {
  StyledCard,
  StyledCardList,
  StyledContentContainer,
  StyledCardListItem,
} from "@/components/Card";
import Image from "next/image";
import { StyledHeader } from "@/components/Header";
import { StyledMain } from "@/components/Main";
import StyledNavigation from "@/components/Navigation";

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
        <>
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
                <div>
                  <StyledLink
                    href={{
                      pathname: `/lists/addplanttoplace`,
                      query: { id: place.id },
                    }}
                    color={"green"}
                  >
                    +
                  </StyledLink>
                </div>
              </StyledCard>
            );
          })}
        </>
      </StyledMain>
    </>
  );
}
