import {
  StyledHeader,
  StyledHomeHeader,
  StyledSubHeader,
} from "@/components/Styling/Header";
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
      <StyledHomeHeader>
        <div>
          <h1>Grow Green</h1>
          <StyledSubHeader>
            <h2>Gärtnern leicht gemacht</h2>
          </StyledSubHeader>
        </div>
        <StyledImage
          width="150"
          height="80"
          alt="Pflanze"
          src={"/pictures/GrowGreenHead.svg"}
          priority={true}
        />
      </StyledHomeHeader>

      <StyledMain>
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
