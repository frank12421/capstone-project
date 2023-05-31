import { useRouter } from "next/router";
import { useOnePlace } from "@/utils/helper";
import { StyledCardColumnContainer } from "@/components/Styling/Card";
import ShortListPlants from "../ShortListPlants";
import HeaderPlantsAtThisPlaceList from "../../Places/HeaderPlantsAtThisPlaceList";
import { useState } from "react";
import AllPlantsSortedtList from "../AllPlantsSortedList";

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
      <HeaderPlantsAtThisPlaceList
        placeData={data}
        setAddPlant={setAddPlant}
        addPlant={addPlant}
      />

      {!addPlant ? (
        <StyledCardColumnContainer margintop={"160px"}>
          {data.plants.map((plant) => (
            <ShortListPlants
              key={plant._id}
              plantId={plant.plantid}
              placeId={site.id}
              uniquePlantId={plant._id}
            />
          ))}
        </StyledCardColumnContainer>
      ) : (
        <AllPlantsSortedtList />
      )}
    </>
  );
}
