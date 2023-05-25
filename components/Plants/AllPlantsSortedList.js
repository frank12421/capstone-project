import { fetcher } from "@/utils/helper";
import useSWR from "swr";
import { StyledMain } from "../Main";
import {
  StyledCard,
  StyledCardList,
  StyledCardListItem,
  StyledContentContainer,
} from "../Card";
import {
  StyledModifyCountButtonActive,
  StyledModifyCountButtonInactive,
} from "../StyledButton";

export default function AllPlantsSortedtList({ id, placeData }) {
  const { data, error, isLoading } = useSWR(`/api/plants/`, fetcher);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const plantsSorted = [...data].sort((a, b) => (a.name > b.name ? 1 : -1));
  const freePlaces = placeData.capacity - placeData.used;
  const showAddButton = freePlaces <= 0 ? false : true;
  const showMinusButton = freePlaces >= placeData.capacity ? false : true;

  function onClickAddPlant() {
    console.log("click plus");

    // setPlaces(

    //   places.map((place) => {
    //     if (place.id === site.id) {
    //       return { ...place, used: place.used + 1 };
    //     } else {
    //       return { ...place };
    //     }
    //   })
    // );
  }

  function onClickMinusPlant() {
    console.log("click minus");

    //setPlaces(

    //   places.map((place) => {
    //     if (place.id === site.id) {
    //       return { ...place, used: place.used - 1 };
    //     } else {
    //       return { ...place };
    //     }
    //   })
    //);
  }

  return (
    <StyledMain margintop="110">
      {plantsSorted.map((plant) => {
        return (
          <StyledCard border={"green"} key={plant._id}>
            <h2>{plant.name}</h2>
            <StyledContentContainer>
              {showMinusButton ? (
                <StyledModifyCountButtonActive
                  onClick={onClickMinusPlant}
                  color="red"
                >
                  -
                </StyledModifyCountButtonActive>
              ) : (
                <StyledModifyCountButtonInactive>
                  -
                </StyledModifyCountButtonInactive>
              )}

              {showAddButton ? (
                <StyledModifyCountButtonActive
                  onClick={onClickAddPlant}
                  color="green"
                >
                  +
                </StyledModifyCountButtonActive>
              ) : (
                <StyledModifyCountButtonInactive>
                  +
                </StyledModifyCountButtonInactive>
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
