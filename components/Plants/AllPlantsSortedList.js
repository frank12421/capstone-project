import { sendRequest, useAllPlants, useOnePlace } from "@/utils/helper";
import useSWRMutation from "swr/mutation";
import { useRouter } from "next/router";
import { CardContainer, CardInfoLinkButton } from "../Card/Card.Styling";
import { StyledCircleButton } from "../Styling/StyledButton";
import { StyledIconAdd } from "../Styling/StyledIcon";

export default function AllPlantsSortedtList() {
  const router = useRouter();
  const site = router.query;
  const { trigger } = useSWRMutation(`/api/places/${site.id}`, sendRequest);
  const { data, error, isLoading } = useAllPlants();

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const plantsSorted = [...data].sort((a, b) => (a.name > b.name ? 1 : -1));

  const onClickAddPlant = (value) => {
    const addNewPlant = { plantid: value };
    const options = { new: true };
    const dataToUpdate = {
      $push: { plants: addNewPlant },
    };

    trigger({ method: "PATCH", data: dataToUpdate, options });
  };

  return (
    <>
      {plantsSorted.map((plant) => {
        return (
          <CardContainer
            key={plant._id}
            backgroundcolor={"globalPlantBackgroundColor"}
          >
            <h2>{plant.name}</h2>
            <span>
              Type: {plant.type} | Pflanzhöhe: {plant.plantheight}
            </span>
            <h3>Anbaueignung: {plant.cultivation_suitability}</h3>
            <CardInfoLinkButton>
              <StyledCircleButton
                type="button"
                onClick={() => onClickAddPlant(plant._id)}
                color="globalNavigationPlaceColor"
              >
                <StyledIconAdd />
              </StyledCircleButton>
            </CardInfoLinkButton>
          </CardContainer>
        );
      })}
    </>
  );
}
