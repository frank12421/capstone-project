import { useRouter } from "next/router";
import { useOnePlace } from "@/utils/helper";
import ShortListPlants from "../ShortListPlants";
import HeaderPlantsAtThisPlaceList from "../../Places/HeaderPlantsAtThisPlaceList";
import { useState } from "react";
import AllPlantsSortedtList from "../AllPlantsSortedList";
import {
  StyledNavigationContainer,
  StyledNavigationLink,
} from "@/components/Styling/Navigation";
import Image from "next/image";
import { StyledHeader } from "@/components/Styling/Header";
import { StyledMain } from "@/components/Styling/Main";

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
          <StyledNavigationLink href="/lists/placelist" color="transparent">
            <Image
              width="35"
              height="35"
              alt=""
              src={"/pictures/arrow-left.svg"}
              priority={true}
            />
          </StyledNavigationLink>
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
          </>
        ) : (
          <AllPlantsSortedtList />
        )}
      </StyledMain>
    </>
  );
}
