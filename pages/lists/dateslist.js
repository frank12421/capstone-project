import { StyledHeader } from "@/components/Styling/Header";
import { StyledNavigationContainer } from "@/components/Navigation/Navigation";
import NavigationBack from "@/components/Navigation/NavigationBack";
import { StyledMain } from "@/components/Styling/Main";
import NavigationAdd from "@/components/Navigation/NavigationAdd";
import ShowPlantList from "@/components/Plants/ShowPlantList";
import ShowShortDatesList from "@/components/Dates/ShowShortDatesList";
import ShowDatesList from "@/components/Dates/ShowDatesList";

export default function DatesList() {
  return (
    <>
      <StyledHeader position="sticky">
        <h1>Termine | Grow Green</h1>
        <StyledNavigationContainer>
          <NavigationBack href="/" />
          <NavigationAdd
            href="/forms/showdateform/"
            color="globalDateBackgroundColor"
          />
        </StyledNavigationContainer>
      </StyledHeader>
      <StyledMain gap="15">
        <ShowDatesList />
      </StyledMain>
    </>
  );
}
