import { StyledHeader } from "@/components/Styling/Header";
import { StyledMain } from "@/components/Styling/Main";
import StyledNavigationLink, {
  StyledNavigationContainer,
} from "@/components/Styling/Navigation";
import { useAllPlants } from "@/utils/helper";
import PlantCardLong from "../Plants/PlantCardLong";
import Image from "next/image";

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
      <StyledHeader position="sticky">
        <h1>Pflanzen | Grow Green</h1>
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
        </StyledNavigationContainer>
      </StyledHeader>
      <StyledMain gap="15">
        {plants.map((plant) => {
          return <PlantCardLong key={plant._id} plant={plant} />;
        })}
      </StyledMain>
    </>
  );
}
