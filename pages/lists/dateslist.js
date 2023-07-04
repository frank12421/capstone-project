import { StyledHeader } from "@/components/Styling/Header";
import { StyledNavigationContainer } from "@/components/Navigation/Navigation";
import NavigationBack from "@/components/Navigation/NavigationBack";
import { StyledMain } from "@/components/Styling/Main";
import ShowDatesList from "@/components/Dates/ShowDatesList";
import NavigationAdd from "@/components/Navigation/NavigationAdd";

export default function DatesList({navibacklink, titel, id, color}) {
  return (
    <>
      <StyledHeader position="sticky">
        <h1>Alle Termine | Grow Green</h1>
        <StyledNavigationContainer>
          <NavigationBack href="/" />
          <NavigationAdd href="/forms/showdateform/" 
          color="globalNavigationDateColor" 
          navibacklink="/lists/dateslist" 
          titel="Einen neue Termin anlegen"/>
        </StyledNavigationContainer>
      </StyledHeader>
      <StyledMain gap="15">
        <ShowDatesList />
      </StyledMain>
    </>
  );
}
