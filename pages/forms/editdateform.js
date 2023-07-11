import { StyledHeader } from "@/components/Styling/Header";
import { StyledMain } from "@/components/Styling/Main";
import { StyledNavigationContainer } from "@/components/Navigation/Navigation";
import DateForm from "@/components/Dates/DateForm";
import NavigationBack from "@/components/Navigation/NavigationBack";
import { useRouter } from "next/router";

export default function EditDateForm() {
  const router = useRouter();
  const titel = router.query.titel;
  const backLink = router.query.navibacklink;
  const id = router.query.id;

  return (
    <>
      <StyledHeader position="sticky">
        <h1 id="NewDateForPlaces">{titel}</h1>
        <StyledNavigationContainer>
          <NavigationBack href={`${backLink}`} />
        </StyledNavigationContainer>
      </StyledHeader>
      <StyledMain>
        <DateForm url={`/api/dates/`} id={id} />
      </StyledMain>
    </>
  );
}
