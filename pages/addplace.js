import AddPlaceForm from "@/components/Places/AddPlaceForm";
import StyledNavigation from "@/components/Navigation";
import { StyledMain } from "@/components/Main";
import { StyledHeader } from "@/components/Header";

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
