import { useRouter } from "next/router";
import { StyledHeader } from "@/components/Header";
import { StyledMain } from "@/components/Main";
import StyledNavigation from "@/components/Navigation";
import Form from "@/components/addDateForm.js";

export default function ShowDateForm({ dates, setDates }) {
  const router = useRouter();
  const site = router.query;

  if (!site.id) {
    return null;
  }

  return (
    <>
      <StyledHeader>
        <h1>Hier legen Sie einen neue Termin an</h1>
        <StyledNavigation navigationlink="/lists/placelist" color="darkgreen">
          zurück
        </StyledNavigation>
      </StyledHeader>
      <StyledMain>
        <Form locationId={site.id} dates={dates} setDates={setDates} />
      </StyledMain>
    </>
  );
}
