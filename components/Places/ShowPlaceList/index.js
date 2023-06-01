import { StyledHeader } from "@/components/Styling/Header";
import { StyledMain } from "@/components/Styling/Main";
import StyledNavigationLink, {
  StyledNavigationContainer,
} from "@/components/Styling/Navigation";
import { useAllPlaces } from "@/utils/helper";
import PlaceCardLong from "../PlaceCardLong";
import Image from "next/image";
import { StyledIconImage } from "@/components/Styling/StyledImage";

export default function ShowPlaceList() {
  const { data: places, error, isLoading } = useAllPlaces();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <StyledHeader position="sticky">
        <h1>Standorte | Grow Green</h1>
        <StyledNavigationContainer>
          <StyledNavigationLink navigationlink="/" color="transparent">
            <Image
              width="35"
              height="35"
              alt=""
              src={"/pictures/arrow-left.svg"}
              priority={true}
            />
          </StyledNavigationLink>
          <StyledNavigationLink
            align="right"
            color="transparent"
            navigationlink="/addplace"
          >
            <StyledIconImage
              width="35"
              height="35"
              alt=""
              src={"/pictures/add.svg"}
              priority={true}
              align="right"
            />
          </StyledNavigationLink>
        </StyledNavigationContainer>
      </StyledHeader>
      <StyledMain gap="15">
        {places.map((place) => {
          return <PlaceCardLong key={place._id} place={place} />;
        })}
      </StyledMain>
    </>
  );
}
