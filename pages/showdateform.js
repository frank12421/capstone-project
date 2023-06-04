import { useRouter } from "next/router";
import { StyledHeader } from "@/components/Styling/Header";
import { StyledMain } from "@/components/Styling/Main";
import { StyledNavigationContainer } from "@/components/Navigation/Navigation";
import DateForm from "@/components/Dates/DateForm";
import NavigationBack from "@/components/Navigation/NavigationBack";

export default function ShowDateForm({ dates, setDates }) {
  const router = useRouter();
  const site = router.query;

  if (!site.id) {
    return null;
  }

  return (
    <>
      <StyledHeader position="sticky">
        <h1 id="NewDateForPlaces">Einen Termin anlegen</h1>
        <StyledNavigationContainer>
          <NavigationBack href="lists/placelist" />
        </StyledNavigationContainer>
      </StyledHeader>
      <StyledMain>
        <DateForm locationId={site.id} />
      </StyledMain>
    </>
  );
}
