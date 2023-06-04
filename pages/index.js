import { StyledHomeHeader, StyledSubHeader } from "@/components/Styling/Header";
import { StyledMain } from "@/components/Styling/Main";
import ShowDatesList from "@/components/Dates/ShowDatesList";
import CountAllPlants from "@/components/Plants/CountAllPlants";
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

      <StyledMain gap="20" margintop="30">
        <ShowDatesList />
        <CountAllPlaces />
        <CountAllPlants />
      </StyledMain>
    </>
  );
}
