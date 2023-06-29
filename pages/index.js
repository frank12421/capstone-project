import { StyledHomeHeader, StyledSubHeader } from "@/components/Styling/Header";
import { StyledMain } from "@/components/Styling/Main";
import ShowShortDatesList from "@/components/Dates/ShowShortDatesList";
import CountAllPlants from "@/components/Plants/CountAllPlants";
import { StyledHeadImage } from "@/components/Styling/StyledImage";
import CountAllPlaces from "@/components/Places/CountAllPlaces";
import HeadPic from "/public/pictures/GrowGreenHead.png";

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
        <StyledHeadImage src={HeadPic} alt="Gezeichnete Pflanze" />
      </StyledHomeHeader>
      <StyledMain gap="20" margintop="30">
        <ShowShortDatesList />
        <CountAllPlaces />
        <CountAllPlants />
      </StyledMain>
    </>
  );
}
