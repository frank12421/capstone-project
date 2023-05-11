import { places } from "@/db/db";
import { StyledLink } from "@/components/StyledButton";
import {
  StyledCard,
  StyledCardUl,
  StyledContentContainer,
  StyledLi,
} from "@/components/Card";
import Image from "next/image";

export default function PlaceList() {
  return (
    <main>
      <h1>Alle Standorte - Grow Green</h1>
      <StyledLink color="darkgreen" href="/">
        zurück{" "}
      </StyledLink>
      <>
        {places.map((place) => {
          const imgSrc =
            place.standort !== ""
              ? `/pictures/Place-${place.standort}.png`
              : `/pictures/Place-People.png`;

          return (
            <section key={place.id}>
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
                  <StyledCardUl>
                    <StyledLi>Kapazität: {place.kapazitaet}</StyledLi>
                    <StyledLi>Licht: {place.licht}</StyledLi>
                    <StyledLi>Standort: {place.standort}</StyledLi>
                    <StyledLi>Regenschutz: {place.regenschutz}</StyledLi>
                  </StyledCardUl>
                </StyledContentContainer>
              </StyledCard>
            </section>
          );
        })}
      </>
    </main>
  );
}
