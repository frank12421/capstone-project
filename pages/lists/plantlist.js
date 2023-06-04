import { StyledHeader } from "@/components/Styling/Header";
import { StyledNavigationContainer } from "@/components/Navigation/Navigation";
import NavigationBack from "@/components/Navigation/NavigationBack";
import { StyledMain } from "@/components/Styling/Main";
import PlantListCardLong from "@/components/Plants/PlantListCardLong";
import NavigationAdd from "@/components/Navigation/NavigationAdd";

export default function PlantList() {
  return (
    <>
      <StyledHeader position="sticky">
        <h1>Pflanzen | Grow Green</h1>
        <StyledNavigationContainer>
          <NavigationBack href="/" />
          <NavigationAdd href="/addplant" color="globalNavigationPlantColor" />
        </StyledNavigationContainer>
      </StyledHeader>
      <StyledMain gap="15">
        <PlantListCardLong />
      </StyledMain>
    </>
  );
}
