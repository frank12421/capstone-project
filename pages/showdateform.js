import { useRouter } from "next/router";
import { StyledHeader } from "@/components/Styling/Header";
import { StyledMain } from "@/components/Styling/Main";
import StyledNavigationLink, {
  StyledNavigationContainer,
} from "@/components/Styling/Navigation";
import DateForm from "@/components/Dates/DateForm";
import Image from "next/image";

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
          <StyledNavigationLink
            navigationlink="/lists/placelist"
            color="transparent"
          >
            <Image
              width="35"
              height="35"
              alt=""
              src={"/pictures/arrow-left.svg"}
              priority={true}
            />
          </StyledNavigationLink>
        </StyledNavigationContainer>
      </StyledHeader>
      <StyledMain>
        <DateForm locationId={site.id} />
      </StyledMain>
    </>
  );
}
