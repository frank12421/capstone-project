import AddPlaceForm from "@/components/Places/AddPlaceForm";
import StyledNavigation from "@/components/Styling/Navigation";
import { StyledMain } from "@/components/Styling/Main";
import { StyledHeader } from "@/components/Styling/Header";

export default function addPlace() {
  return (
    <>
      <StyledHeader>
        <h1>Einen neuen Standort anlegen</h1>
        <StyledNavigation navigationlink="/" color="darkgreen">
          zurück
        </StyledNavigation>
      </StyledHeader>
      <StyledMain>
        <AddPlaceForm />
      </StyledMain>
    </>
  );
}
