import { StyledHomeHeader, StyledSubHeader } from "@/components/Styling/Header";
import { StyledMain } from "@/components/Styling/Main";

import ShowDatesList from "@/components/Dates/ShowDatesList";

import {
  InfoLinkContainer,
  InfoLinkContainerButton,
  InfoLinkContainerContent,
} from "@/components/Styling/Card";
import CountAllPlants from "@/components/Plants/CountAllPlants";
import { StyledImage, StyledInfoSvg } from "@/components/Styling/StyledImage";
import CountAllPlaces from "@/components/Places/CountAllPlaces";
import Image from "next/image";

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

        <InfoLinkContainer
          href={"lists/placelist"}
          backgroundcolor="globalPlaceBackgroundColor"
        >
          <InfoLinkContainerContent>
            <CountAllPlaces />
          </InfoLinkContainerContent>
          <InfoLinkContainerButton>
            <Image
              width="35"
              height="35"
              alt=""
              src={"/pictures/info-circle.svg"}
              priority={true}
            />
          </InfoLinkContainerButton>
        </InfoLinkContainer>

        <InfoLinkContainer
          href={"lists/plantlist"}
          backgroundcolor="globalPlantBackgroundColor"
        >
          <InfoLinkContainerContent>
            <CountAllPlants />
          </InfoLinkContainerContent>
          <InfoLinkContainerButton>
            <Image
              width="35"
              height="35"
              alt=""
              src={"/pictures/info-circle.svg"}
              priority={true}
            />
          </InfoLinkContainerButton>
        </InfoLinkContainer>
      </StyledMain>
    </>
  );
}
