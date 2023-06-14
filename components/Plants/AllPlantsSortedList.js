import { fetcher, useOnePlace } from "@/utils/helper";
import useSWR from "swr";
import {
  InfoLinkContainerButton,
  InfoLinkContainerContent,
} from "../Styling/OldCard";
import {} from "../Styling/StyledButton";
import useSWRMutation from "swr/mutation";
import { useRouter } from "next/router";
import { CardContainer } from "../Card/Card.Styling";
import { StyledIconAdd } from "../Styling/StyledIcon";

async function sendRequest(url, { arg }) {
  const response = await fetch(url, {
    method: "PATCH",
    body: JSON.stringify(arg),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    await response.json();
  } else {
    console.error(`Error: ${response.status}`);
  }
}

export default function AllPlantsSortedtList() {
  const router = useRouter();
  const site = router.query;
  const place = useOnePlace(site.id);
  const placeData = place.data;
  const { trigger } = useSWRMutation(`/api/places/${site.id}`, sendRequest);
  const { data, error, isLoading } = useSWR(`/api/plants/`, fetcher);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const plantsSorted = [...data].sort((a, b) => (a.name > b.name ? 1 : -1));
  const freePlaces = placeData.capacity - placeData.plants.length;
  const showAddButton = freePlaces >= 1;

  const onClickAddPlant = (value) => {
    const addNewPlant = { plantid: value };
    const options = { new: true };
    const dataToUpdate = {
      update: {
        $push: { plants: addNewPlant },
      },
    };

    trigger({ data: dataToUpdate, options });
  };

  return (
    <>
      {plantsSorted.map((plant) => {
        return (
          <CardContainer
            key={data.plantid}
            backgroundcolor="globalPlantBackgroundColor"
          >
            <InfoLinkContainerContent>
              <h2>{plant.name}</h2>
              <span>Type: {plant.type}</span> |{" "}
              <span>Pflanzhöhe: {plant.plantheight}</span>
              <h3>Anbaueignung: {plant.cultivation_suitability}</h3>
            </InfoLinkContainerContent>
            {showAddButton && (
              <InfoLinkContainerButton>
                <StyledIconAdd
                  color="globalNavigationPlaceColor"
                  onClick={() => onClickAddPlant(plant._id)}
                />
              </InfoLinkContainerButton>
            )}
          </CardContainer>
        );
      })}
    </>
  );
}
