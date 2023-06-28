import useSWRMutation from "swr/mutation";

import ButtonCard from "../Card/ButtonCard";
import { sendRequest, useOnePlant } from "@/utils/helper";

export default function ShortListPlants({ plantId, placeId, uniquePlantId }) {
  const plant = useOnePlant(plantId);
  const { trigger } = useSWRMutation(`/api/places/${placeId}`, sendRequest);

  const onClickMinusPlant = (uniquePlantId) => {
    const options = { new: true };
    const dataToUpdate = {
      update: { $pull: { plants: { _id: uniquePlantId } } },
    };
    trigger({ method: "PATCH", data: dataToUpdate, options });
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
