import ButtonCard from "@/components/Card/ButtonCard";
import {
  StyledCardList,
  StyledCardListItem,
  StyledContentRowContainer,
} from "@/components/Styling/OldCard";
import { useAllPlants } from "@/utils/helper";
import Image from "next/image";
import useSWRMutation from "swr/mutation";

async function sendRequest(url, { arg }) {
  const response = await fetch(url, {
    method: "DELETE",
  });

  if (response.ok) {
    throw new Error("Failed to delete");
  }

  return response.json();
}

export default function PlantListCardLong() {
  const { data: plants, error, isLoading } = useAllPlants();
  const { trigger } = useSWRMutation(`/api/plant/${plantId}`, sendRequest);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const onClickMinusPlant = (plantId) => {
    const options = { new: true };
    trigger({ data: plantId, options });
    console.log("Click-Minus-Plant", plantId);
  };

  return (
    <>
      {plants.map((plant) => {
        return (
          <ButtonCard
            key={plant._id}
            handleClick={() => onClickMinusPlant(plant._id)}
            backgroundcolor="globalPlantBackgroundColor"
            buttonicon="minus"
          >
            <h2>{plant.name}</h2>
            <StyledContentRowContainer>
              <Image
                src={
                  plant.type === "Normal"
                    ? "/pictures/Plant1.svg"
                    : "/pictures/Plant2.svg"
                }
                alt="Pflanze"
                width="50"
                height="100"
                style={{ objectFit: "contain" }}
                priority
              />
              <StyledCardList>
                <StyledCardListItem>Type: {plant.type}</StyledCardListItem>
                <StyledCardListItem>
                  Pflanzhöhe: {plant.plantheight}
                </StyledCardListItem>
                <StyledCardListItem>
                  Anbaueignung: {plant.cultivation_suitability}
                </StyledCardListItem>
                <StyledCardListItem>
                  Fruchtform: {plant.fruit_shape}
                </StyledCardListItem>
                <StyledCardListItem>
                  Fruchtfarbe: {plant.fruit_color}
                </StyledCardListItem>
              </StyledCardList>
            </StyledContentRowContainer>
          </ButtonCard>
        );
      })}
    </>
  );
}
