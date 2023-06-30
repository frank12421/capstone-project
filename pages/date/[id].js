import DateForm from "@/components/Dates/DateForm";
import { StyledNavigationContainer } from "@/components/Navigation/Navigation";
import NavigationBack from "@/components/Navigation/NavigationBack";
import { StyledHeader } from "@/components/Styling/Header";
import { StyledMain } from "@/components/Styling/Main";
import { useOneDate, useOnePlant } from "@/utils/helper";
import { useRouter } from "next/router";

export default function EditDate() {
  const router = useRouter();
  const site = router.query;

  const { data, error, isLoading } = useOneDate(site.id);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!site.id) {
    return null;
  }

  return (
    <>
      <>
        <StyledHeader position="sticky">
          <h1>Termin bearbeiten</h1>
          {site.id}
          <StyledNavigationContainer>
            <NavigationBack href="/lists/dateslist" />
          </StyledNavigationContainer>
        </StyledHeader>
        <StyledMain>
          <DateForm url={`/api/dates/${data._id}`} dateData={data} />
        </StyledMain>
      </>
    </>
  );
}
