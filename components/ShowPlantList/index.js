import { StyledHeader } from "@/components/Styling/Header";
import { StyledMain } from "@/components/Styling/Main";
import StyledNavigation from "@/components/Styling/Navigation";
import { useAllPlants } from "@/utils/helper";
import PlantCardLong from "../Plants/PlantCardLong";

export default function ShowPlantList() {
  const { data: plants, error, isLoading } = useAllPlants();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <StyledHeader>
        <h1>Alle Pflanzen von Grow Green</h1>
        <StyledNavigation navigationlink="/" color="darkgreen">
          zurück
        </StyledNavigation>
      </StyledHeader>
      <StyledMain>
        <>
          {plants.map((plant) => {
            return <PlantCardLong key={plant._id} plant={plant} />;
          })}
        </>
      </StyledMain>
    </>
  );
}
