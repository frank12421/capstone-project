import { useRouter } from "next/router";
import { useOnePlace } from "@/utils/helper";
import ShortListPlants from "../ShortListPlants";
import HeaderPlantsAtThisPlaceList from "../../Places/HeaderPlantsAtThisPlaceList";
import { useState } from "react";
import AllPlantsSortedtList from "../AllPlantsSortedList";
import { StyledNavigationContainer } from "@/components/Navigation/Navigation";
import { StyledHeader } from "@/components/Styling/Header";
import { StyledMain } from "@/components/Styling/Main";
import NavigationBack from "@/components/Navigation/NavigationBack";

export default function ShowPlantsThisPlace() {
  const router = useRouter();
  const site = router.query;
  const { data, error, isLoading } = useOnePlace(site.id);
  const [addPlant, setAddPlant] = useState(false);

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
      <StyledHeader position="sticky">
        <h1>{data.name}</h1>
        <StyledNavigationContainer>
          <NavigationBack href="/lists/placelist" />
        </StyledNavigationContainer>
        <HeaderPlantsAtThisPlaceList
          placeData={data}
          setAddPlant={setAddPlant}
          addPlant={addPlant}
        />
      </StyledHeader>
      <StyledMain gap="15" margintop="15">
        {!addPlant ? (
          <>
            {data.plants.map((plant) => (
              <ShortListPlants
                key={plant._id}
                plantId={plant.plantid}
                placeId={site.id}
                uniquePlantId={plant._id}
              />
            ))}
            {console.log("Render-Plant-List")}{" "}
          </>
        ) : (
          <AllPlantsSortedtList />
        )}
      </StyledMain>
    </>
  );
}
