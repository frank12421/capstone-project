import { StyledNavigationContainer } from "@/components/Navigation/Navigation";
import { StyledMain } from "@/components/Styling/Main";
import { StyledHeader } from "@/components/Styling/Header";
import NavigationBack from "@/components/Navigation/NavigationBack";
import AddPlantForm from "@/components/Plants/AddPlantForm";

export default function addPlant() {
  return (
    <>
      <StyledHeader position="sticky">
        <h1>Neue Pflanzen anlegen</h1>
        <StyledNavigationContainer>
          <NavigationBack href="/lists/plantlist" />
        </StyledNavigationContainer>
      </StyledHeader>
      <StyledMain>
        <AddPlantForm />
      </StyledMain>
    </>
  );
}
