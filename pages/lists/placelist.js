import { StyledLink } from "@/components/StyledButton";
import {
  StyledCard,
  StyledCardList,
  StyledContentContainer,
  StyledCardListItem,
} from "@/components/Card";
import Image from "next/image";
import React from "react";
export default function PlaceList({ places }) {
  return (
    <main>
      <h1>Alle Standorte - Grow Green</h1>
      <StyledLink color="darkgreen" href="/">
        zurück{" "}
      </StyledLink>
      <>
        {places.map((place) => {
          const imgSrc =
            place.location !== ""
              ? `/pictures/Place-${place.location}.png`
              : `/pictures/Place-People.png`;

          return (
            <React.Fragment key={place.id}>
              <StyledCard border={"darkred"}>
                <h2>{place.name}</h2>
                <StyledContentContainer>
                  <Image
                    src={imgSrc}
                    alt="Pflanze"
                    width="150"
                    height="150"
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
            </React.Fragment>
          );
        })}
      </>
    </main>
  );
}
