import useSWRMutation from "swr/mutation";
import { sendPatchRequest, useOnePlant } from "@/utils/helper";
import ButtonCard from "../Card/ButtonCard";

ShortListPlants({ plantId, placeId, uniquePlantId }) {
  const plant = useOnePlant(plantId);
  const { trigger } = useSWRMutation(
    `/api/places/${placeId}`,
    sendPatchRequest
  );

  const onClickMinusPlant = (uniquePlantId) => {
    const options = { new: true };
    const dataToUpdate = {
      update: { $pull: { plants: { _id: uniquePlantId } } },
    };
    trigger({ data: dataToUpdate, options });
  };

  if (!plant.data) {
    return null;
  } else {
    return (
      <ButtonCard
        handleClick={() => onClickMinusPlant(uniquePlantId)}
        backgroundcolor="globalPlantBackgroundColor"
        buttonicon="minus"
      >
        <h2>{plant.data.name}</h2>
        Code: {uniquePlantId}
      </ButtonCard>
    );
  }
}
