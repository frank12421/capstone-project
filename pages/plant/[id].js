import { StyledNavigationContainer } from "@/components/Navigation/Navigation";
import NavigationBack from "@/components/Navigation/NavigationBack";
import AddPlantForm from "@/components/Plants/AddPlantForm";
import { StyledHeader } from "@/components/Styling/Header";
import { StyledMain } from "@/components/Styling/Main";
import { useOnePlant } from "@/utils/helper";
import { useRouter } from "next/router";

export default function EditPlant() {
  const router = useRouter();
  const site = router.query;

  const { data, error, isLoading } = useOnePlant(site.id);

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
          <h1>Pflanze bearbeiten</h1>
          <StyledNavigationContainer>
            <NavigationBack href="/lists/plantlist" />
          </StyledNavigationContainer>
        </StyledHeader>
        <StyledMain>
          <AddPlantForm plantData={data} />
        </StyledMain>
      </>
    </>
  );
}
