import { useRouter } from "next/router";
import Form from "@/components/addDateForm";
import { StyledHeader } from "@/components/Header";
import { StyledMain } from "@/components/Main";
import StyledNavigation from "@/components/Navigation";

export default function ShowForm() {
  const router = useRouter();
  const site = router.query;

  if (!site.id) {
    return null;
  }

  console.log("Location:", site.id);

  return (
    <>
      <StyledHeader>
        <h1>Hier legen Sie einen neue Termin an</h1>
        <StyledNavigation navigationlink="/lists/placelist" color="darkgreen">
          zurück
        </StyledNavigation>
      </StyledHeader>
      <StyledMain>
        <Form locationId={site.id} />
      </StyledMain>
    </>
  );
}
