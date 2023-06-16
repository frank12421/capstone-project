import useSWRMutation from "swr/mutation";
import { useOnePlant } from "@/utils/helper";
import ButtonCard from "../Card/ButtonCard";

async function sendRequest(url, { arg }) {
  console.log("URL=", url);
  console.log("arg=", arg);
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
    console.log("Click-Minus-ShortListPlants");
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
