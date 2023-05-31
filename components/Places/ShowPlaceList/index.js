import { StyledHeader } from "@/components/Styling/Header";
import { StyledMain } from "@/components/Styling/Main";
import StyledNavigationLink from "@/components/Styling/Navigation";
import { useAllPlaces } from "@/utils/helper";
import PlaceCardLong from "../PlaceCardLong";

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
      <StyledHeader>
        <h1>Alle Standorte - Grow Green</h1>
        <StyledNavigationLink navigationlink="/" color="darkgreen">
          zurück
        </StyledNavigationLink>
        <StyledNavigationLink color="tomato" navigationlink="/addplace">
          Einen neuen Standort anlegen
        </StyledNavigationLink>
      </StyledHeader>
      <StyledMain>
        {places.map((place) => {
          return <PlaceCardLong key={place._id} place={place} />;
        })}
      </StyledMain>
    </>
  );
}
