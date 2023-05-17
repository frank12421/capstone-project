import { useRouter } from "next/router";
import Form from "@/components/addDateForm";
import { StyledHeader } from "@/components/Header";

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
      </StyledHeader>
      <Form locationId={site.id} />
    </>
  );
}
