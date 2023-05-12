import { StyledLink } from "@/components/StyledButton";
import {
  StyledCard,
  StyledCardUl,
  StyledContentContainer,
  StyledLi,
} from "@/components/Card";
import Image from "next/image";

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
                    <StyledLi>
                      Kapazität: {place.used} / {place.capacity}
                    </StyledLi>
                    <StyledLi>Licht: {place.lightratio}</StyledLi>
                    <StyledLi>Standort: {place.location}</StyledLi>
                    <StyledLi>Regenschutz: {place.rainprotection}</StyledLi>
                  </StyledCardUl>
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
            </section>
          );
        })}
      </>
    </main>
  );
}
