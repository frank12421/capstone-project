import useSWRMutation from "swr/mutation";
import { useOnePlant } from "@/utils/helper";
import PlantCardShort from "./PlantCardShort";
import { StyledIconImage } from "../Styling/StyledImage";

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

export default function ShortListPlants({ plantId, placeId, uniquePlantId }) {
  const plant = useOnePlant(plantId);
  const { trigger } = useSWRMutation(`/api/places/${placeId}`, sendRequest);

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
      <PlantCardShort plant={plant.data} uniquePlantId={uniquePlantId}>
        <StyledIconImage
          width="35"
          height="35"
          alt=""
          src={"/pictures/minus.svg"}
          priority={true}
          align="right"
          onClick={() => onClickMinusPlant(uniquePlantId)}
        />
      </PlantCardShort>
    );
  }
}
