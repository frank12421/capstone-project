import AddPlaceForm from "@/components/Places/AddPlaceForm";
import { StyledNavigationContainer } from "@/components/Navigation/Navigation";
import { StyledMain } from "@/components/Styling/Main";
import { StyledHeader } from "@/components/Styling/Header";
import NavigationBack from "@/components/Navigation/NavigationBack";

export default function addPlace() {
  return (
    <>
      <StyledHeader position="sticky">
        <h1>Neuen Standort anlegen</h1>
        <StyledNavigationContainer>
          <NavigationBack href="/lists/placelist" />
        </StyledNavigationContainer>
      </StyledHeader>
      <StyledMain>
        <AddPlaceForm />
      </StyledMain>
    </>
  );
}
