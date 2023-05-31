import { StyledHeader } from "@/components/Styling/Header";
import { StyledMain } from "@/components/Styling/Main";

import ShowDatesList from "@/components/Dates/ShowDatesList";

import { StyledCard, StyledCardFooter } from "@/components/Styling/Card";
import CountAllPlants from "@/components/Plants/CountAllPlants";
import { StyledCardLink } from "@/components/Styling/StyledCardLink";
import { StyledImage } from "@/components/Styling/StyledImage";
import CountAllPlaces from "@/components/Places/CountAllPlaces";

export default function HomePage({ dates, places }) {
  return (
    <>
      <StyledHeader>
        <h1>Hello from Grow Green</h1>
      </StyledHeader>

      <StyledMain>
        <StyledImage
          width="350"
          height="150"
          alt="Pflanze"
          src={"/pictures/Header-Home.png"}
        />

        <ShowDatesList />
        <StyledCardLink href={"lists/placelist"}>
          <StyledCard backgroundcolor="globalPlaceBackgroundColor">
            Alle Standorte anzeigen
            <StyledCardFooter>
              <CountAllPlaces />
            </StyledCardFooter>
          </StyledCard>
        </StyledCardLink>

        <StyledCardLink href={"lists/plantlist"}>
          <StyledCard backgroundcolor="globalPlantBackgroundColor">
            Alle Pflanzen zeigen
            <StyledCardFooter>
              <CountAllPlants />
            </StyledCardFooter>
          </StyledCard>
        </StyledCardLink>
      </StyledMain>
    </>
  );
}
