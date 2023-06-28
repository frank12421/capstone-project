import { StyledNavigationContainer } from "@/components/Navigation/Navigation";
import NavigationBack from "@/components/Navigation/NavigationBack";
import AddPlaceForm from "@/components/Places/AddPlaceForm";
import AddPlantForm from "@/components/Plants/AddPlantForm";
import ShowPlantsThisPlace from "@/components/Plants/ShowPlantsThisPlace";
import { StyledHeader } from "@/components/Styling/Header";
import { StyledMain } from "@/components/Styling/Main";
import { useOnePlace } from "@/utils/helper";
import { useRouter } from "next/router";

export default function EditPlace() {
  const router = useRouter();
  const site = router.query;

  const { data, error, isLoading } = useOnePlace(site.id);

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
      {console.log("places/id-Edit")}
      <StyledHeader position="sticky">
        <h1>Standort bearbeiten</h1>
        <StyledNavigationContainer>
          <NavigationBack href="/lists/placelist" />
        </StyledNavigationContainer>
      </StyledHeader>
      <StyledMain>
        <AddPlaceForm url={`/api/places/${data._id}`} placeData={data} />
      </StyledMain>
    </>
  );
}
