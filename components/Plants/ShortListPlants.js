import useSWRMutation from "swr/mutation";
import { sendRequest, useOnePlant } from "@/utils/helper";
import { CardContainer, CardInfoLinkButton } from "../Card/Card.Styling";
import { StyledIconMinus } from "../Styling/StyledIcon";
import { StyledCircleButton } from "../Styling/StyledButton";

export default function ShortListPlants({ plantId, placeId, uniquePlantId }) {
  const plant = useOnePlant(plantId);
  const { trigger } = useSWRMutation(`/api/places/${placeId}`, sendRequest);

  const onClickMinusPlant = (uniquePlantId) => {
    const options = { new: true };
    // const dataToUpdate = {
    //   update: { $pull: { plants: { _id: uniquePlantId } } },
    // };
    const dataToUpdate = {
      $pull: { plants: { _id: uniquePlantId } },
    };

    trigger({ method: "PATCH", data: dataToUpdate, options });
  };

  if (!plant.data) {
    return null;
  } else {
    return (
      <CardContainer backgroundcolor="globalPlantBackgroundColor">
        <h2>{plant.data.name}</h2>
        Code: {uniquePlantId}
        <CardInfoLinkButton>
          <StyledCircleButton
            type="button"
            onClick={() => onClickMinusPlant(uniquePlantId)}
            color="globalNavigationPlaceColor"
          >
            <StyledIconMinus />
          </StyledCircleButton>
        </CardInfoLinkButton>
      </CardContainer>
    );
  }
}
