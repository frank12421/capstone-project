import AddPlaceForm from "@/components/Places/AddPlaceForm";
import StyledNavigationLink from "@/components/Styling/Navigation";
import { StyledMain } from "@/components/Styling/Main";
import { StyledHeader } from "@/components/Styling/Header";

export default function addPlace() {
  return (
    <>
      <StyledHeader>
        <h1 id="NewPlace">Einen neuen Standort anlegen</h1>
        <StyledNavigationLink navigationlink="/lists/placelist">
          zurück
        </StyledNavigationLink>
      </StyledHeader>
      <StyledMain>
        <AddPlaceForm />
      </StyledMain>
    </>
  );
}
