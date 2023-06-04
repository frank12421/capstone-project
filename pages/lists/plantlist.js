import { StyledHeader } from "@/components/Styling/Header";
import { StyledNavigationContainer } from "@/components/Navigation/Navigation";
import NavigationBack from "@/components/Navigation/NavigationBack";
import { StyledMain } from "@/components/Styling/Main";
import PlantListCardLong from "@/components/Plants/PlantListCardLong";

export default function PlantList() {
  return (
    <>
      <StyledHeader position="sticky">
        <h1>Pflanzen | Grow Green</h1>
        <StyledNavigationContainer>
          <NavigationBack href="/" />
        </StyledNavigationContainer>
      </StyledHeader>
      <StyledMain gap="15">
        <PlantListCardLong />
      </StyledMain>
    </>
  );
}
