// shows list of all plants at this location (siteId)

import { fetcher, useOnePlace } from "@/utils/helper";
import useSWR from "swr";
import { StyledMain } from "../Styling/Main";
import {
  StyledCard,
  StyledCardList,
  StyledCardListItem,
  StyledContentContainer,
} from "../Styling/Card";
import {
  StyledModifyCountButtonActive,
  StyledModifyCountButtonInactive,
  StyledRoundButton,
  StyledRoundButtonActiv,
  StyledRoundButtonInActive,
} from "../Styling/StyledButton";
import useSWRMutation from "swr/mutation";
import { useRouter } from "next/router";

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
  const showAddButton = freePlaces <= 0 ? false : true;

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
    <StyledMain margintop="140">
      {plantsSorted.map((plant) => {
        return (
          <StyledCard
            backgroundcolor={"globalPlantBackgroundColor"}
            key={plant._id}
          >
            <h2>{plant.name}</h2>
            <h5>{plant._id}</h5>
            <StyledContentContainer>
              {showAddButton ? (
                <StyledRoundButtonActiv
                  onClick={() => onClickAddPlant(plant._id)}
                  color="green"
                >
                  +
                </StyledRoundButtonActiv>
              ) : (
                <StyledRoundButtonInActive>+</StyledRoundButtonInActive>
              )}
              <StyledCardList>
                <StyledCardListItem>Type: {plant.type}</StyledCardListItem>
                <StyledCardListItem>
                  Pflanzdatum: {plant.plantingdate}
                </StyledCardListItem>
                <StyledCardListItem>
                  Pflanzhöhe: {plant.plantheight}
                </StyledCardListItem>
                <StyledCardListItem>
                  Anbaueignung: {plant.cultivation_suitability}
                </StyledCardListItem>
                <StyledCardListItem>
                  Standort: {plant.location}
                </StyledCardListItem>
              </StyledCardList>
            </StyledContentContainer>
          </StyledCard>
        );
      })}
    </StyledMain>
  );
}
