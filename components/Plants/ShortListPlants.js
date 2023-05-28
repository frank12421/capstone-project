import useSWRMutation from "swr/mutation";
import { useOnePlant } from "@/utils/helper";

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
      <>
        <>{plant.data.name}</>
        <button onClick={() => onClickMinusPlant(uniquePlantId)}>-</button>
      </>
    );
  }
}
