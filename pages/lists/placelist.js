import { StyledNavigationContainer } from "@/components/Navigation/Navigation";
import NavigationAdd from "@/components/Navigation/NavigationAdd";
import NavigationBack from "@/components/Navigation/NavigationBack";
import ShowPlaceList from "@/components/Places/ShowPlaceList";
import { StyledHeader } from "@/components/Styling/Header";
import { StyledMain } from "@/components/Styling/Main";

export default function PlaceList() {
  return (
    <>
      <StyledHeader position="sticky">
        <h1>Standorte | Grow Green</h1>
        <StyledNavigationContainer>
          <NavigationBack href="/" />
          <NavigationAdd
            href="/forms/editplaceform"
            color="globalNavigationPlaceColor"
          />
        </StyledNavigationContainer>
      </StyledHeader>
      <StyledMain gap="15">
        <ShowPlaceList />
      </StyledMain>
    </>
  );
}
